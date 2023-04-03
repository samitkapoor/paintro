const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const shapesRow = document.getElementById("shapes-row");
const brushesRow = document.getElementById("brushes-row");

const brushesIcon = document.getElementById("brushes-row-icon");
const toolsIcon = document.getElementById("tools-icon");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});

brushesIcon.addEventListener("mouseover", () => {
  brushesRow.classList.remove("hidden");
  brushesRow.classList.add("flex");
});

brushesIcon.addEventListener("mouseleave", () => {
  brushesRow.classList.remove("flex");
  brushesRow.classList.add("hidden");
});

toolsIcon.addEventListener("mouseover", () => {
  shapesRow.classList.remove("hidden");
  shapesRow.classList.add("flex");
});

toolsIcon.addEventListener("mouseleave", () => {
  shapesRow.classList.remove("flex");
  shapesRow.classList.add("hidden");
});
