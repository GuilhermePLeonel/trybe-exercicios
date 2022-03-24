const submit = document.getElementById("send-input");

function stopButton(event) {
  event.preventDefault();
}

submit.addEventListener("click", stopButton);
