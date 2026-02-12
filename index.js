
let startbtn = document.getElementById("start-btn");
let pausebtn = document.getElementById("pause-btn");
let resetbtn = document.getElementById("reset-btn");
let input = document.querySelector("input");
let playground = document.getElementById("p1");
let box = document.getElementById("box");
let table = document.getElementById("table");

// console.log(box);
export let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
let timer = null;
let starttime,
  endtime,
  takentime = 0;
startbtn.addEventListener("click", (e) => {
  box.classList.remove("hide");
  box.classList.add("pos");
  starttime = Date.now();
  console.log(starttime, "time");
  let num = input.value;

  if (num > 0) {
    moveBox(); // Initial move
    timer = setInterval(() => {
      moveBox();
    }, num * 1000);
  }
});

function moveBox() {
  let playgroundRect = playground.getBoundingClientRect();
  let boxRect = box.getBoundingClientRect();

  // Calculate max allowable positions
  let maxTop = playgroundRect.height - boxRect.height;
  let maxLeft = playgroundRect.width - boxRect.width;

  // Generate random positions
  let randomTop = Math.floor(Math.random() * maxTop);
  let randomLeft = Math.floor(Math.random() * maxLeft);

  // Apply new positions
  box.style.marginTop = `${randomTop}px`;
  box.style.marginLeft = `${randomLeft}px`;
}
input.addEventListener("input", (e) => {
  let num = input.value;
  console.log(e.target.value, "this isjj");
});
box.addEventListener("click", (e) => {
  endtime = Date.now();
  takentime = (endtime - starttime) / 1000;
  console.log(takentime, "taken time");
  box.classList.add("hide");
  console.log(table, "table");
  let newRow = document.createElement("div");
  newRow.innerText = `${takentime} sec`;
  table.appendChild(newRow);
  clearInterval(timer);
});
resetbtn.addEventListener("click", (e) => {
  box.classList.add("hide");
  box.classList.remove("pos");
  // table.classList.add("finish"); // caused logs to disappear forever
  table.innerHTML = "<h1>time logs</h1>";
  input.value = 0;
  // input.classList.add("finish"); // caused input to disappear forever
  clearInterval(timer);
});

