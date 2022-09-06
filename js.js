const span = document.querySelector(".value");
const startButton = document.querySelector(".start-btn");
const stopButton = document.querySelector(".stop-btn");
const body = document.body;
function randomcolorgenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomcolor = `rgb(${red},${green},${blue})`;
  return randomcolor;
}
let id;
let time = 0;
function start() {
    const randomcolor = randomcolorgenerator();
    span.textContent = randomcolor;
    body.style.backgroundColor = randomcolor;
  if (time == 0) {
    id = setInterval(start, 2000);
    console.log(id);
    time++;
  }
}
stopButton.addEventListener("click", () => {
  clearInterval(id);
  time = 0;
});
