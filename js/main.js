function rgbColor() {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);

  return `rgb(${r} , ${g} , ${b})`;
}

function margin() {
  let top = Math.ceil(Math.random() * 300);
  let left = Math.ceil(Math.random() * 1200);

  return `${top}px  ${left}px `;
}
function randomParametr() {
  let w = Math.ceil(Math.random() * 600);
  let h = Math.ceil(Math.random() * 600);

  return w + "px";
}

let box = document.getElementById("box");
document.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    document.getElementById("box").style.background = rgbColor();
    document.body.style.background = rgbColor();
    box.style.margin = margin();
    box.style.width = randomParametr();
    box.style.height = randomParametr();    
  }
});
