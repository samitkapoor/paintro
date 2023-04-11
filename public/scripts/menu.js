const scale = document.getElementById("scale");
const lineWidth = document.getElementById("line-width");
const lineWidthScaleBox = document.getElementById("line-width-scale-box");
const lineWidthRange = document.getElementById("line-width-range");

let isScaleOpen = false;

const showHideScale = () => {
  if (!isScaleOpen) {
    scale.style.width = "210px";
    isScaleOpen = true;
  } else {
    scale.style.width = "56px";
    isScaleOpen = false;
  }
  lineWidth.classList.toggle("rounded-full");
  lineWidth.classList.toggle("rounded-l-full");
  lineWidthScaleBox.classList.toggle("hidden");
  lineWidthScaleBox.classList.toggle("flex");
};

lineWidth.addEventListener("click", showHideScale);
lineWidthScaleBox.addEventListener("click", showHideScale);

lineWidthRange.addEventListener("click", (e) => {
  // to prevent bubbling
  e.stopImmediatePropagation();
});
