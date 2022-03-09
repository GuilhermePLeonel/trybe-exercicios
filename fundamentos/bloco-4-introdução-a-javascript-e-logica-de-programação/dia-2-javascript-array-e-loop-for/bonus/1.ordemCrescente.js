let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = [];
let aux = [numbers[0]];


for (let indice2 = 0; indice2 < numbers.length++; indice2 += 1) {
    
    for (let indice = 0; indice < numbers.length; indice += 1) {

        if (numbers[indice] < numbers[indice + 1] && numbers[indice] <= aux[0]) {
            aux[0] = numbers[indice];
        }
        else if (numbers[indice] > numbers[indice + 1] && numbers[indice + 1] < aux[0]) {
            aux[0] = numbers[indice + 1];
        }

        else {

        }
    }


    resultado.push(aux[0]);
    numbers.splice(numbers.indexOf(aux[0]), 1);
    aux[0] = numbers[0];


}

console.log("este é o array em ordem crescente:" + " " + resultado);













