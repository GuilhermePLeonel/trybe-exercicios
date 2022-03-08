let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [0];


for(let indice = 0; indice<numbers.length; indice+=2){
    resultado[0] = (numbers[indice] + (numbers[indice+1]) + resultado[0]);
}

console.log("a soma dos elementos do array é:" + " " +resultado);
