function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// exercicio1
let november = document.getElementById("days");
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function addDays() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
      let day = document.createElement("li");
      day.innerText = dezDaysList[i];
      day.classList = "day holiday";
      november.appendChild(day);
    } else if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18
    ) {
      let day = document.createElement("li");
      day.innerText = dezDaysList[i];
      day.classList = "day friday";
      november.appendChild(day);
    } else if (dezDaysList[i] === 25) {
      let day = document.createElement("li");
      day.innerText = dezDaysList[i];
      day.classList = "day holiday friday";
      november.appendChild(day);
    } else {
      let day = document.createElement("li");
      day.innerText = dezDaysList[i];
      day.classList = "day";
      november.appendChild(day);
    }
  }
}
addDays();

// exercicio2
function holiButton(string) {
  let button = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");
  button.id = "btn-holiday";
  button.innerText = string;
  buttonsContainer.appendChild(button);
}
holiButton("Feriados");

// exercicio3
function buttonHoli() {
  let holidays = document.querySelectorAll(".day");
  for (let i = 0; i < holidays.length; i += 1) {
    if (
      holidays[i].className === "day holiday" ||
      holidays[i].className === "day holiday friday"
    ) {
      if (holidays[i].style.backgroundColor === "") {
        holidays[i].style.backgroundColor = "green";
        holidays[i].style.borderRadius = "50%";
        holidays[i].style.color = "white";
      } else if (holidays[i].style.backgroundColor === "green") {
        holidays[i].style.backgroundColor = "";
        holidays[i].style.color = "";
      }
    }
  }
}
document.getElementById("btn-holiday").addEventListener("click", buttonHoli);

// exercicio4
function saturButton(string) {
  let button = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");
  button.id = "btn-friday";
  button.innerText = string;
  buttonsContainer.appendChild(button);
}
saturButton("Sexta-Feira");

// exercicio5
function buttonSatur() {
  let holidays = document.querySelectorAll(".day");
  for (let i = 0; i < holidays.length; i += 1) {
    if (
      holidays[i].className === "day friday" ||
      holidays[i].className === "day holiday friday"
    ) {
      if (holidays[i].innerText != "SEXTOU!!") {
        holidays[i].innerText = "SEXTOU!!";
      } else if (holidays[i].innerText === "SEXTOU!!") {
        holidays[i].innerText = dezDaysList[i];
      }
    }
  }
}
document.getElementById("btn-friday").addEventListener("click", buttonSatur);

// exercicio6
function zoomIn(event) {
  event.target.style.fontSize = "25px";
  event.target.style.margin = "auto";
}
document.getElementById("days").addEventListener("mouseover", zoomIn, false);

function zoomOut(event) {
  event.target.style.fontSize = "";
  event.target.style.margin = "";
}
document.getElementById("days").addEventListener("mouseout", zoomOut, false);

// exercicio7
function tasks(string) {
  let span = document.createElement("span");
  span.innerText = string;
  document.querySelector(".my-tasks").appendChild(span);
}
tasks("Passar em todos os projetos com 100%");

// exercicio8
function lyrics(cor) {
  let div = document.createElement("div");
  div.classList = "task";
  div.style.backgroundColor = cor;
  document.querySelector(".my-tasks").appendChild(div);
}
lyrics("red");

// exercicio9
function selectTask(event) {
  if (document.querySelector(".my-tasks div ").className === "task") {
    event.target.classList = "task-selected";
  } else {
    event.target.classList = "task";
  }
}
document
  .querySelector(".my-tasks")
  .addEventListener("click", selectTask, false);

// exercicio10
function dayColor() {
  let taskSelected = document.getElementsByClassName("task-selected");
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", evento);

  function evento(event) {
    let eventTargetColor = event.target.style.color;
    if (taskSelected.length > 0 && eventTargetColor !== taskColor) {
      let color = taskSelected[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && taskSelected.length !== 0) {
      event.target.style.color = "rgb(119,119,119)";
    }
  }
}

dayColor();

// exercicioBônus
function addButton() {
  let input = document.getElementById("task-input");
  let add = document.getElementById("btn-add");
  let taskList = document.querySelector(".task-list");

  add.addEventListener("click", addList);
  function addList() {
    if (input.value === "") {
      window.alert("ERRO: digite algum compromisso!");
    } else {
      let listItem = document.createElement("li");
      listItem.innerText = input.value;
      taskList.appendChild(listItem);
    }
  }
  function enter(event) {
    if (event.key == "enter") {
      let listItem = document.createElement("li");
      listItem.innerText = input.value;
      taskList.appendChild(listItem);
    }
  }
  input.addEventListener("key", enter);
}

addButton();
