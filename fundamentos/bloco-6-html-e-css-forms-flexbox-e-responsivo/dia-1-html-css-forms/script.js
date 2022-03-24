const submit = document.getElementById("send-input");
const clear = document.getElementById("clear-input");
const content = document.getElementById("form");
const imgUsage = document.getElementById("imageUsage-input");

const myName = document.getElementById("name-input");
const email = document.getElementById("email-input");
const text = document.getElementById("text-input");

// faz o botão de enviar parar de funcionar
// function stopButton(event) {
//   event.preventDefault();
// }

// submit.addEventListener("click", stopButton);

// adciona um botão que limpa os dados
function clearButton() {
  content.preventDefault();
}

clear.addEventListener("click", clearButton);

// exercicios bonus
function caracter() {
  if (myName.value.length < 10 || myName.value.length > 40) {
    window.alert("Dados Inválidos");
  } else if (email.value.length < 10 || email.value.length > 50) {
    window.alert("Dados Inválidos");
  } else if (text.value.length > 500) {
    window.alert("Dados Inválidos");
  } else {
    window.alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}
submit.addEventListener("click", caracter);
