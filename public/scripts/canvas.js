const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;

let brushWidth = 1;

function sizeCanvas() {
  //assigning the height and width to the canvas
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

window.addEventListener("load", () => {
  sizeCanvas();
});

window.addEventListener("resize", () => {
  sizeCanvas();
});

// drawing on the canvas
function startDrawing() {
  isDrawing = true;
  ctx.beginPath(); //creates a new path to draw
  ctx.lineWidth = brushWidth;
}

function stopDrawing() {
  isDrawing = false;
}

function drawing(e) {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();
}

canvas.addEventListener("mousemove", drawing);

canvas.addEventListener("mousedown", startDrawing);

canvas.addEventListener("mouseup", stopDrawing);

// buttons
// pen button
const pen = document.getElementById("pen");
const paintBrush = document.getElementById("paint-brush");

pen.addEventListener("click", () => {
  brushWidth = 1;
});

paintBrush.addEventListener("click", () => {
  brushWidth = 5;
});
