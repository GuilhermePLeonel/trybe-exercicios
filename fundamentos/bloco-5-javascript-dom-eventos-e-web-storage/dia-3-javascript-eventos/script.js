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
      day.classList = "day holliday";
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
      day.classList = "day holliday friday";
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
