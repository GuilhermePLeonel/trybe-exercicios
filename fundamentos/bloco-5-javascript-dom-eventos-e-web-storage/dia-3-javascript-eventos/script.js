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
function saturButton(string) {
  let button = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");
  button.id = "btn-holiday";
  button.innerText = string;
  buttonsContainer.appendChild(button);
}
saturButton("Feriados");

// exercicio3
function buttonHolli() {
  let holidays = document.querySelectorAll(".day");
  for (let i = 0; i < holidays.length; i += 1) {
    if (
      holidays[i].className === "day holiday" ||
      holidays[i].className === "day holiday friday"
    ) {
      if (holidays[i].style.backgroundColor === "") {
        holidays[i].style.backgroundColor = "red";
      } else if (holidays[i].style.backgroundColor === "red") {
        holidays[i].style.backgroundColor = "";
      }
    }
  }
}
document.getElementById("btn-holiday").addEventListener("click", buttonHolli);

// exercicio4
function holiButton(string) {
  let button = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");
  button.id = "btn-friday";
  button.innerText = string;
  buttonsContainer.appendChild(button);
}
holiButton("Sexta-Feira");

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
