const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const allTools = document.querySelectorAll(".tool");

let prevMouseX, prevMouseY, snapShot;
let fillColor = false;
let isDrawing = false;
let selectedTool = "pen";
let brushWidth = 2;

function setBackground() {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// changing brush width
const lineWidthRange = document.getElementById("line-width-range");
lineWidthRange.addEventListener("change", () => {
  brushWidth = lineWidthRange.value;
});

let lineColor = "#ffffff";

function resizeCanvas() {
  //assigning the height and width to the canvas
  canvas.height = window.innerHeight - (10 / 100) * window.innerHeight;
  canvas.width = window.innerWidth;
}

window.addEventListener("load", () => {
  resizeCanvas();
  setBackground();
});

window.addEventListener("resize", () => {
  resizeCanvas();
});

// drawing on the canvas
function startDrawing(e) {
  isDrawing = true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;
  ctx.beginPath(); //creates a new path to draw
  ctx.lineWidth = brushWidth;
  snapShot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function stopDrawing() {
  isDrawing = false;
}

function drawRect(e) {
  if (fillColor)
    return ctx.fillRect(
      e.offsetX,
      e.offsetY,
      prevMouseX - e.offsetX,
      prevMouseY - e.offsetY
    );
  ctx.strokeRect(
    e.offsetX,
    e.offsetY,
    prevMouseX - e.offsetX,
    prevMouseY - e.offsetY
  );
}

function drawCircle(e) {
  ctx.beginPath();
  let radius = Math.sqrt(
    Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(prevMouseY - e.offsetY, 2)
  );
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
  fillColor ? ctx.fill() : ctx.stroke();
}

function drawSquare(e) {
  let a = prevMouseX - e.offsetX;
  let b = prevMouseY - e.offsetY;

  let side = Math.min(a, b);

  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);

  if (fillColor) return ctx.fillRect(e.offsetX, e.offsetY, side, side);
  ctx.strokeRect(e.offsetX, e.offsetY, side, side);
}

function drawTriangle(e) {
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
  ctx.closePath();
  fillColor ? ctx.fill() : ctx.stroke();
}

function drawing(e) {
  if (!isDrawing) return;
  ctx.putImageData(snapShot, 0, 0);
  ctx.strokeStyle = lineColor;
  ctx.fillStyle = lineColor;

  if (
    selectedTool === "pen" ||
    selectedTool === "paint-brush" ||
    selectedTool === "eraser"
  ) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  } else if (selectedTool === "rectangle") {
    drawRect(e);
  } else if (selectedTool === "circle") {
    drawCircle(e);
  } else if (selectedTool === "square") {
    drawSquare(e);
  } else if (selectedTool === "triangle") {
    drawTriangle(e);
  }
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
  lineWidthRange.max = "100";
});

allTools.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedTool = btn.id;
    console.log(selectedTool);
  });
});

const fill = document.getElementById("fill"); //to fill color inside the shapes

fill.addEventListener("click", () => {
  fillColor = !fillColor;
  console.log(fillColor);
});

const trash = document.getElementById("trash"); //to clear all the art on the canvas

trash.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const download = document.getElementById("download"); //to download the art created by the artist

download.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  link.click();
});
