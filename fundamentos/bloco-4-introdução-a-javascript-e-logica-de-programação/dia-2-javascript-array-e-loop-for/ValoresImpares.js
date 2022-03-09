let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [];

for (let indice = 0; indice<numbers.length; indice+=1){
    if((numbers[indice] % 2) !== 0){
        resultado.push(numbers[indice]);
        
    } 

    else{
        
    }
}



if (resultado.length > 0){
    console.log("estes são os numeros ímpares do array:" + " " + resultado);
}
else {
    console.log("nenhum valor ímpar encontrado!");
}
