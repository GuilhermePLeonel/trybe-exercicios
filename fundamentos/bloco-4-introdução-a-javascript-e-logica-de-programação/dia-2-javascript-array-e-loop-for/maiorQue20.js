let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let calculo = 0;
let média;

for(let indice = 0; indice<numbers.length; indice+=1){
    calculo += numbers[indice];
    media = calculo/numbers.length;
}
if (media>20){
    console.log("a média tem valor maior que 20");
}

else{
    console.log("o valor da media é menor ou igual a 20");
}





