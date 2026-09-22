import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const brand = path.join(root, "public/images/brand");
const app = path.join(root, "src/app");
await mkdir(brand, { recursive: true });
const source = path.join(brand, "pantech-logo-transparent.png");
const logo = await sharp(source).trim().resize({ width: 960 }).png().toBuffer();
await sharp(logo)
  .webp({ lossless: true })
  .toFile(path.join(brand, "pantech-logo.webp"));
await writeFile(path.join(brand, "pantech-logo.png"), logo);

// Isolate the symbol from the prepared brand master for small-size icon exports.
const mark = await sharp(source)
  .extract({ left: 65, top: 80, width: 700, height: 710 })
  .png()
  .toBuffer();
await writeFile(path.join(brand, "pantech-mark.png"), mark);

async function icon(size) {
  const inset = Math.round(size * 0.12);
  const symbol = await sharp(mark)
    .resize(size - inset * 2, size - inset * 2, {
      fit: "contain",
      background: "#ffffff",
    })
    .png()
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: "#ffffff" },
  })
    .composite([{ input: symbol, gravity: "centre" }])
    .png()
    .toBuffer();
}

for (const [size, destination] of [
  [64, path.join(app, "icon.png")],
  [180, path.join(app, "apple-icon.png")],
  [192, path.join(brand, "icon-192.png")],
  [512, path.join(brand, "icon-512.png")],
])
  await writeFile(destination, await icon(size));

// ICO directory with PNG payloads: covers standard and high-DPI browser tabs.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(icon));
const directory = Buffer.alloc(6 + images.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(images.length, 4);
let offset = directory.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(image.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(
  path.join(app, "favicon.ico"),
  Buffer.concat([directory, ...images]),
);

await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#ffffff" },
})
  .composite([{ input: logo, gravity: "centre" }])
  .png()
  .toFile(path.join(brand, "pantech-social.png"));
console.log(
  "Generated optimized logo, favicon, touch icons, app icons, and social preview.",
);
console.log(
  "Logo dimensions:",
  await sharp(logo)
    .metadata()
    .then(({ width, height }) => ({ width, height })),
);
