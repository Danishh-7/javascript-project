import "./styles.css";
let startbtn = document.getElementById("start-btn");
let pausebtn = document.getElementById("pause-btn");
let resetbtn = document.getElementById("reset-btn");
let input = document.querySelector("input");
let playground = document.getElementById("p1");
let box = document.getElementById("box");
let table = document.getElementById("table");
let table1 = document.querySelector("table1");
// console.log(box);
export let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
let timer = null;
let starttime,
  endtime,
  takentime = 0;
startbtn.addEventListener("click", (e) => {
  box.classList += " pos";
  starttime = Date.now();
  console.log(starttime, "time");
  let num = document.querySelector("input").value;
  timer = setTimeout(() => {
    box.classList += " hide";
  }, num * 1000);
});
input.addEventListener("onChange", (e) => {
  let num = input.value;
  console.log(e.target.value, "this isjj");
});
box.addEventListener("click", (e) => {
  endtime = Date.now();
  takentime = (endtime - starttime) / 1000;
  console.log(takentime, "taken time");
  box.classList += " hide";
  console.log(table, "table");
  let newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${takentime} sec</td>`;
  table.appendChild(newRow);
  clearTimeout(timer);
});
resetbtn.addEventListener("click", (e) => {
  box.classList += " hide";
  table.classList += " finish";
  document.querySelector("input").value = 0;
  input.classList += " finish";
  clearTimeout(timer);
});

