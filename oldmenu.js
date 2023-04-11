const menuDrawer = document.getElementById("menu-drawer");
const menu = document.getElementById("menu");

// opens and closes the doors
menuDrawer.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});

// to show or hide an element from the screen
function show(element) {
  element.classList.remove("hidden");
  element.classList.add("flex");
}

function hide(element) {
  element.classList.remove("flex");
  element.classList.add("hidden");
}

const lineWidth = document.getElementById("line-width");
const lineWidthScale = document.getElementById("line-width-scale-box");
const scale = document.getElementById("scale");

lineWidth.addEventListener("click", () => {
  scale.classList.toggle("w-56");
  lineWidth.classList.toggle("rounded-l-full");
  scale.classList.toggle("w-14");
  lineWidth.classList.toggle("rounded-full");
});

// lineWidth.addEventListener("mouseleave", () => {
//   hide(lineWidthScale);
// });

// lineWidthScale.addEventListener("mouseleave", () => {
//   hide(lineWidthScale);
// });

const tools = document.getElementById("tools");
const toolsCol = document.getElementById("tools-col");

// to show tools column on hovering tools icon
tools.addEventListener("mouseover", () => {
  show(toolsCol);
});

tools.addEventListener("mouseleave", () => {
  hide(toolsCol);
});

tools.addEventListener("click", () => {
  toolsCol.toggle("hidden");
  toolsCol.toggle("flex");
});

toolsCol.addEventListener("mouseover", () => {
  show(toolsCol);
});

toolsCol.addEventListener("mouseleave", () => {
  hide(toolsCol);
});

const shapes = document.getElementById("shapes");
const shapesCol = document.getElementById("shapes-col");

// to show shapes column on hovering columns icon
shapes.addEventListener("mouseover", () => {
  show(shapesCol);
});

shapes.addEventListener("mouseleave", () => {
  hide(shapesCol);
});

shapes.addEventListener("click", () => {
  shapesCol.toggle("hidden");
  shapesCol.toggle("flex");
});

shapesCol.addEventListener("mouseover", () => {
  show(shapesCol);
});

shapesCol.addEventListener("mouseleave", () => {
  hide(shapesCol);
});
