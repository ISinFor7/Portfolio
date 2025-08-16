const canvas = document.getElementById("monCanevas") as HTMLCanvasElement;
if (!canvas) {
  throw new Error("Canvas element not found");
}
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");
if (!ctx) {
  throw new Error("Failed to get canvas context");
}
ctx.strokeStyle = "#000";
ctx.lineWidth = 3;
ctx.strokeRect(25, 25, 175, 200);

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 100, 100);

console.log("Canvas initialized with dimensions:", width, "x", height);