#!/usr/bin/env python3
"""Build cPanel-friendly asset ZIP archives (full + split parts)."""
from __future__ import annotations

import zipfile
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS_DIR = ROOT / "public" / "assets"
DEPLOY_DIR = ROOT / "deploy" / "cpanel-assets"
PART_MAX_BYTES = 28 * 1024 * 1024


def list_files() -> list[tuple[Path, str, int]]:
    files: list[tuple[Path, str, int]] = []
    for path in sorted(ASSETS_DIR.iterdir()):
        if path.is_file():
            files.append((path, path.name, path.stat().st_size))
    return files


def write_zip(output: Path, entries: list[tuple[Path, str, int]]) -> int:
    output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for full, name, _ in entries:
            zf.write(full, arcname=name)
    return output.stat().st_size


def split_parts(entries: list[tuple[Path, str, int]]) -> list[list[tuple[Path, str, int]]]:
    parts: list[list[tuple[Path, str, int]]] = []
    current: list[tuple[Path, str, int]] = []
    current_size = 0

    for entry in entries:
        if current and current_size + entry[2] > PART_MAX_BYTES:
            parts.append(current)
            current = []
            current_size = 0
        current.append(entry)
        current_size += entry[2]

    if current:
        parts.append(current)
    return parts


def main() -> None:
    if not ASSETS_DIR.is_dir():
        raise SystemExit(f"Missing folder: {ASSETS_DIR}")

    entries = list_files()
    total = sum(size for _, _, size in entries)
    print(f"Assets: {len(entries)} files, {total / 1024 / 1024:.2f} MB")

    DEPLOY_DIR.mkdir(parents=True, exist_ok=True)

    full_zip = DEPLOY_DIR / "assets-full.zip"
    full_size = write_zip(full_zip, entries)
    print(f"Created {full_zip.relative_to(ROOT)} ({full_size / 1024 / 1024:.2f} MB compressed)")

    parts = split_parts(entries)
    for index, part_entries in enumerate(parts, start=1):
        part_name = f"assets-part-{index:02d}-of-{len(parts):02d}.zip"
        part_zip = DEPLOY_DIR / part_name
        part_size = write_zip(part_zip, part_entries)
        print(
            f"Created {part_zip.relative_to(ROOT)} — "
            f"{len(part_entries)} files, {part_size / 1024 / 1024:.2f} MB compressed"
        )

    instructions = DEPLOY_DIR / "UPLOAD-INSTRUCTIONS.txt"
    instructions.write_text(
        "\n".join(
            [
                "cPanel upload instructions",
                "=======================",
                "",
                "Drag-and-drop in cPanel File Manager often fails for folders with many files.",
                "Use ZIP upload + Extract instead:",
                "",
                "1. cPanel > File Manager",
                "2. Open public/assets on the server",
                "3. Upload assets-full.zip",
                "   (if that fails, upload assets-part-01, 02, 03... one by one)",
                "4. Select the zip file > Extract",
                "5. Files must end up directly in public/assets/",
                "6. Delete zip files after extraction",
                "",
                f"Generated: {datetime.now(timezone.utc).isoformat()}",
                f"Files: {len(entries)}",
            ]
        ),
        encoding="utf-8",
    )
    print(f"\nDone. Upload from: {DEPLOY_DIR.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()
