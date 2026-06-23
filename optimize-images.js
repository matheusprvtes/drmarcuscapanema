const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "assets");
const sources = ["marcus-blazer", "marcus-serio", "marcus-sorrindo"];
const widths = [1080, 640];

(async () => {
  for (const name of sources) {
    const input = path.join(dir, `${name}.jpg`);
    if (!fs.existsSync(input)) { console.log("faltando:", input); continue; }
    const buf = fs.readFileSync(input);
    for (const w of widths) {
      const suffix = w === 1080 ? "" : `-${w}`;
      // WebP
      await sharp(buf).resize({ width: w }).webp({ quality: 78 })
        .toFile(path.join(dir, `${name}${suffix}.webp`));
      // JPG fallback (otimizado)
      await sharp(buf).resize({ width: w }).jpeg({ quality: 80, mozjpeg: true })
        .toFile(path.join(dir, `${name}${suffix}.jpg`));
    }
    console.log("ok:", name);
  }
  // Relatório de tamanhos
  const files = fs.readdirSync(dir).filter(f => /marcus-/.test(f));
  for (const f of files) {
    const kb = (fs.statSync(path.join(dir, f)).size / 1024).toFixed(1);
    console.log(`${f.padEnd(28)} ${kb} KB`);
  }
})();
