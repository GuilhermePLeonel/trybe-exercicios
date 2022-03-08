let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let calculo = 0;
let média;

for(let indice = 0; indice<numbers.length; indice+=1){
    calculo += numbers[indice];
    media = calculo/numbers.length;
}
 console.log("a media aritmetica deste array é:" + " " + media);