/**
 * Compress oversized PNG assets for faster hosting uploads.
 * Run: node scripts/optimize-large-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "../public/assets");

const TARGETS = [
  "curriculum-bts.png",
  "curriculum-master.png",
  "curriculum-bachelor.png",
  "Gemini_Generated_Image_99uv1u99uv1u99uv-e1756911385254.png",
];

const MAX_WIDTH = 1536;

async function optimize(name) {
  const input = path.join(assetsDir, name);
  if (!fs.existsSync(input)) {
    console.log(`Skip missing: ${name}`);
    return;
  }

  const before = fs.statSync(input).size;
  const meta = await sharp(input).metadata();
  const temp = `${input}.optimized.tmp`;

  let pipeline = sharp(input);
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.png({ quality: 80, compressionLevel: 9, effort: 10 }).toFile(temp);

  const after = fs.statSync(temp).size;
  if (after >= before) {
    fs.unlinkSync(temp);
    console.log(`Keep ${name} (${(before / 1024 / 1024).toFixed(2)} MB)`);
    return;
  }

  fs.renameSync(temp, input);
  console.log(
    `Optimized ${name}: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`
  );
}

async function main() {
  for (const name of TARGETS) {
    await optimize(name);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
