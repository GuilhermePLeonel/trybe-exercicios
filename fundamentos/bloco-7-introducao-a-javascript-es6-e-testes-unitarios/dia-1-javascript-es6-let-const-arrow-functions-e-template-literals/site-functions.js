// exercicio 2.3
let btn = document.querySelector('button');
let counter = document.querySelector('input');
counter.style.width = '30px'
let clickCount = 0;

let clicksNumber = () => {
  clickCount += 1;
  counter.placeholder = clickCount
}

btn.addEventListener('click',clicksNumber)