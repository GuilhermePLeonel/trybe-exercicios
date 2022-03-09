let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [];


 
    for (let indice = 0; indice < numbers.length; indice += 1) {
        if(indice<numbers.length-1){
            resultado.push(numbers[indice]*numbers[indice+1])
           
    }

    else{
        resultado.push(numbers[indice]*2);
    }
        
        
    }

    console.log(resultado);

    