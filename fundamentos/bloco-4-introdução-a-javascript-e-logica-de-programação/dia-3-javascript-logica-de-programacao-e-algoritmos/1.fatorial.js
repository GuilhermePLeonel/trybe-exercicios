let number = 10;
let aux = [1];
let resultado = 1;

for (let index = 2; index <=10; index+=1){
    aux.push(index);
}


for (let index2 = 0; index2 <10; index2+=1){
    resultado *= aux[index2];
    
}

console.log(resultado);



