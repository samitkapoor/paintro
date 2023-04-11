const menu = document.getElementById("menu");
const scale = document.getElementById("scale");
const lineWidth = document.getElementById("line-width");
const lineWidthScaleBox = document.getElementById("line-width-scale-box");
const lineWidthRange = document.getElementById("line-width-range");
var fill = document.getElementById("fill");

let isScaleOpen = false;
let isFill = false;

const showHideScale = () => {
  if (!isScaleOpen) {
    scale.style.width = "210px";
    menu.style.gap = "0.5rem";
    isScaleOpen = true;
  } else {
    scale.style.width = "56px";
    menu.style.gap = "1rem";
    isScaleOpen = false;
  }
  lineWidth.classList.toggle("rounded-full");
  lineWidth.classList.toggle("rounded-l-full");
  lineWidthScaleBox.classList.toggle("hidden");
  lineWidthScaleBox.classList.toggle("flex");
  menu.classList.toggle("gap-4");
  menu.classList.toggle("gap-2");
};

lineWidth.addEventListener("click", showHideScale);
lineWidthScaleBox.addEventListener("click", showHideScale);

lineWidthRange.addEventListener("click", (e) => {
  // to prevent bubbling
  e.stopImmediatePropagation();
});

fill.addEventListener("click", () => {
  if (!isFill) {
    fill.style.backgroundColor = "blue";
    isFill = true;
  } else {
    fill.style.backgroundColor = "";
    isFill = false;
  }
});
