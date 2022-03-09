let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = [0]

for (let indice = 0; indice < numbers.length; indice+=1){
    if(numbers[indice]>numbers[indice+1] && numbers[indice]>aux[0]){
        aux[0] = numbers[indice];
    }
    else if (numbers[indice]<numbers[indice+1] && numbers[indice+1]>aux[0]) {
        aux[0] = numbers[indice+1];
    }

    else{
        
    }
}

console.log(aux);