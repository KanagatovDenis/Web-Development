const mouseX = document.querySelector(".mouse_type_x");
const mouseY = document.querySelector(".mouse_type_y");

document.onmousemove = function (event) {
  mouseX.textContent = event.clientX;
  mouseY.textContent = event.clientY;
}
