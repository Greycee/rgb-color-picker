// prettier-ignore
function getColor() {
  const red = (document.querySelector("#redValue").value = document.querySelector("#red").value);

  const green = (document.querySelector("#greenValue").value = document.querySelector("#green").value);

  const blue = (document.querySelector("#blueValue").value = document.querySelector("#blue").value);

  const square = (document.querySelector("#square").style.backgroundColor = `rgb(${red},${green},${blue})`);
}
