#!/usr/bin/env python3
"""Audit public/assets for upload/hosting issues."""
import os
import re
import unicodedata
from pathlib import Path

ASSETS = Path(__file__).resolve().parents[1] / "public" / "assets"


def classify(head: bytes) -> str:
    if head[:3] == b"\xff\xd8\xff":
        return "JPEG"
    if head[:8] == b"\x89PNG\r\n\x1a\n":
        return "PNG"
    if head[:4] == b"%PDF":
        return "PDF"
    if len(head) >= 12 and head[4:8] == b"ftyp":
        return "MP4"
    if head.startswith(b"<?xml") or head.startswith(b"<svg"):
        return "SVG"
    return "UNKNOWN"


def main() -> None:
    issues: list[str] = []
    files = sorted(f for f in ASSETS.iterdir() if f.is_file())
    total = 0
    ext_map = {
        ".jpg": "JPEG",
        ".jpeg": "JPEG",
        ".png": "PNG",
        ".pdf": "PDF",
        ".mp4": "MP4",
        ".svg": "SVG",
    }
    names_lower: dict[str, list[str]] = {}

    for f in files:
        total += f.stat().st_size
        name = f.name
        names_lower.setdefault(name.lower(), []).append(name)

        if any(ord(c) > 127 for c in name):
            issues.append(f"NON_ASCII: {name}")
        if re.search(r"[\s()\[\]{}'\"\\`]", name):
            issues.append(f"SPECIAL_CHAR: {name}")
        if len(name) > 200:
            issues.append(f"LONG_NAME ({len(name)}): {name}")
        if f.stat().st_size == 0:
            issues.append(f"EMPTY: {name}")

        head = f.read_bytes()[:32]
        actual = classify(head)
        expected = ext_map.get(f.suffix.lower())
        if expected and actual not in (expected, "UNKNOWN"):
            issues.append(f"WRONG_EXT ({f.suffix} is {actual}): {name}")

    dupes = {k: v for k, v in names_lower.items() if len(v) > 1}

    print(f"Files: {len(files)}")
    print(f"Total size MB: {total / 1024 / 1024:.2f}")
    print(f"Issues: {len(issues)}")
    for item in issues:
        print(f"  - {item}")
    if dupes:
        print(f"Case-insensitive duplicates: {len(dupes)}")
        for k, v in dupes.items():
            print(f"  - {v}")

    large = sorted(files, key=lambda p: p.stat().st_size, reverse=True)[:10]
    print("Largest files:")
    for f in large:
        print(f"  {f.stat().st_size / 1024 / 1024:.2f} MB  {f.name}")


if __name__ == "__main__":
    main()
