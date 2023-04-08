const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;

let brushWidth = 2;

// changing brush width
const lineWidthRange = document.getElementById("line-width-range");
lineWidthRange.addEventListener("change", () => {
  brushWidth = lineWidthRange.value;
});

let lineColor = "#ffffff";

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
  ctx.strokeStyle = lineColor;
  ctx.stroke();
}

canvas.addEventListener("mousemove", drawing);

canvas.addEventListener("mousedown", startDrawing);

canvas.addEventListener("mouseup", stopDrawing);

// buttons
// pen button
const pen = document.getElementById("pen");
const paintBrush = document.getElementById("paint-brush");
const eraser = document.getElementById("eraser");

pen.addEventListener("click", () => {
  lineWidthRange.value = brushWidth = 1;
  lineColor = "#ffffff";
  lineWidthRange.max = "20";
});

paintBrush.addEventListener("click", () => {
  lineWidthRange.value = brushWidth = 5;
  lineColor = "#ffffff";
  lineWidthRange.max = "100";
});

eraser.addEventListener("click", () => {
  lineColor = "#111111";
});
