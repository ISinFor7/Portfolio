function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}
var dark= "#130D15";
var light= "#E2E0DA";
const canvas = document.getElementById("monCanevas");
if (!canvas) {
  throw new Error("Canvas element not found");
}
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");
if (!ctx) {
  throw new Error("Failed to get canvas context");
}
/*
ctx.strokeStyle = "#000";
ctx.lineWidth = 3;
ctx.strokeRect(25, 25, 175, 200);

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 700, 250);

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 1000, 30);*/

// Roof

/*
ctx.strokeStyle = "#2E3844";
ctx.lineWidth = 3;
for (let i = 0; i < 21; i++) {
  ctx.beginPath();
  ctx.moveTo(0, 410 + i * 20);
  ctx.lineTo(800 + i * 20, 410 + i * 20);
  ctx.lineTo(820 + 30*20 + i * 20, 390 - 30*20 + i * 20);
  ctx.stroke();
}*/



//grille dans le fond

ctx.strokeStyle = "#332D35";
ctx.lineWidth = 1;
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.moveTo(0,0 + i * 100);
  ctx.lineTo(1000 + i * 100, -1000);
  ctx.moveTo(0,-2000 + i * 100);
  ctx.lineTo(3000 , 1000 + i * 100);
  ctx.stroke();
}

//croix dans la grille
ctx.strokeStyle = "#36475B";
ctx.lineWidth = 3;
for (let n = 7; n > -20; n--) {
  for (let m = 7; m > -20; m--) {
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.moveTo(-10 + m * 100 + i * 50, -10 + n * 100 + i * 50);
      ctx.lineTo(10 + m * 100 + i * 50, 10 + n * 100 + i * 50);
      ctx.moveTo(10 + m * 100 + i * 50, -10 + n * 100 + i * 50);
      ctx.lineTo(-10 + m * 100 + i * 50, 10 + n * 100 + i * 50);
      ctx.stroke();
    }
  }
}

//lignes blanches

ctx.strokeStyle = light;
ctx.lineWidth = 5;
for (let i = 0; i < 7; i++) {
  ctx.beginPath();
  ctx.moveTo(0, 410 + i * 20);
  ctx.lineTo(800 + i * 20, 410 + i * 20);
  ctx.lineTo(820 + 6*20 + i * 20, 390 - 6*20 + i * 20);
  ctx.lineTo(1120 + i * 20, 390 - 6*20+ i * 20);
  ctx.stroke();
}

for (let i = 0; i < 7; i++) {
  ctx.beginPath();
  ctx.moveTo(0, 390 - i * 20);
  ctx.lineTo(800 + i * 20, 390 - i * 20);
  ctx.lineTo(820 + 6*20 + i * 20, 410 + 6*20 - i * 20 );
  ctx.lineTo(1120 + i * 20, 410 + 6*20 - i * 20);
  ctx.stroke();
}

ctx.strokeStyle = dark;
ctx.lineWidth = 3;
for (let i = 0; i < 7; i++) {
  ctx.beginPath();
  ctx.moveTo(0, 410 + i * 20);
  ctx.lineTo(800 + i * 20, 410 + i * 20);
  ctx.lineTo(820 + 6*20 + i * 20, 390 - 6*20 + i * 20);
  ctx.lineTo(1120 + i * 20, 390 - 6*20+ i * 20);
  ctx.stroke();
}

for (let i = 0; i < 7; i++) {
  ctx.beginPath();
  ctx.moveTo(0, 390 - i * 20);
  ctx.lineTo(800 + i * 20, 390 - i * 20);
  ctx.lineTo(820 + 6*20 + i * 20, 410 + 6*20 - i * 20 );
  ctx.lineTo(1120 + i * 20, 410 + 6*20 - i * 20);
  ctx.stroke();
}

//carré

ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 7;
for (let i = 0; i < 11; i++) {
  ctx.beginPath();
  ctx.moveTo(400 , 200- i * 20);
  ctx.lineTo(400 + i * 20, 200);
  ctx.stroke();
}
for (let i = 11; i < 21; i++) {
  ctx.beginPath();
  ctx.moveTo(400 , 200 - i * 20);
  ctx.lineTo(600, 400 - i * 20 );
  ctx.stroke();
}
console.log("Canvas initialized with dimensions:", width, "x", height);