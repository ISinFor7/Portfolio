function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}
var dark = "#130D15";
var light = "#E2E0DA";
const cv = document.getElementsByClassName("boxDiv");
for (let e of cv) {
  const nCanvas = document.createElement("canvas");
  nCanvas.className = "boxDivCanvas w-max h-max -z-10 absolute";
  const height = e.clientHeight;
  const width = e.clientWidth;
  nCanvas.width = width;
  nCanvas.height = height;
  const ctx = nCanvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get canvas context");
  }
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(5, 5, width-10, height-10);
  ctx.strokeStyle = light;
    ctx.lineWidth = 2;
    ctx.strokeRect(5, 5, width-10, height-10);
    ctx.fillStyle = light;
    ctx.fillRect(0,0,9,9);
    ctx.fillRect(0, height-9, 9, 9);
    ctx.fillRect(width-9,0,9,9);
    ctx.fillRect(width-9, height-9, 9, 9);
  console.log("Canvas initialized with dimensions:", width, "x", height);
  e.parentElement.appendChild(nCanvas);

}
