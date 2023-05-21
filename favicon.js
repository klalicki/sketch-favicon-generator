const canvas = document.createElement("canvas");
canvas.width = 96;
canvas.height = 96;
const ctx = canvas.getContext("2d");
const favicon = document.querySelector("link[rel='icon']");

const pushToFavicon = () => {
  favicon.href = canvas.toDataURL("image/png");
};

const redRoundRect = () => {
  ctx.fillStyle = "#ff0000";
  // ctx.fillRect(0, 0, 96, 96);
  ctx.roundRect(0, 0, 96, 96, 30);
  ctx.fill();
  pushToFavicon();
};
document.querySelector("#btn-1").addEventListener("click", redRoundRect);

//gradient using two colors selected by user
const gradientRoundRect = () => {
  const color1 = document.querySelector("#color1").value;
  const color2 = document.querySelector("#color2").value;
  const gradient = ctx.createLinearGradient(0, 0, 96, 0);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
  ctx.roundRect(0, 0, 96, 96, 30);
  ctx.fill();
  pushToFavicon();
};
document.querySelector("#btn-2").addEventListener("click", gradientRoundRect);
