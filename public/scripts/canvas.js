const canvas = document.getElementById("canvas");

function sizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

window.addEventListener("load", () => {
  const ctx = canvas.getContext("2d");

  sizeCanvas();
});

window.addEventListener("resize", () => {
  sizeCanvas();
});
