const s = require("sharp");

(async () => {
  const { data, info } = await s("public/images/hero-house-trim.png").raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, ch = info.channels;
  const a = (x, y) => data[(y * W + x) * ch + 3];

  let top = H, bot = 0, left = W, right = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (a(x, y) > 200) {
        if (y < top) top = y;
        if (y > bot) bot = y;
        if (x < left) left = x;
        if (x > right) right = x;
      }
    }
  }
  console.log("solid bbox: top", top, "bottom", bot, "left", left, "right", right);

  for (const fx of [0, 0.1, 0.2, 0.3, 0.4, 0.45, 0.5, 0.566, 0.583, 0.6, 0.7, 0.8, 0.9, 0.99]) {
    const x = Math.round(fx * (W - 1));
    let y0 = -1;
    for (let y = 0; y < H; y++) {
      if (a(x, y) > 200) { y0 = y; break; }
    }
    console.log("col", fx, "firstSolidY", y0);
  }

  let mn = W, mx = 0;
  for (let y = top; y < top + 4; y++) {
    for (let x = 0; x < W; x++) {
      if (a(x, y) > 200) {
        if (x < mn) mn = x;
        if (x > mx) mx = x;
      }
    }
  }
  console.log("apex x range", mn, "-", mx);
})();
