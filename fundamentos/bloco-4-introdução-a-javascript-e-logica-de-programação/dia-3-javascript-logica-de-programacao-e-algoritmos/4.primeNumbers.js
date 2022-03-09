let number = 50;
let aux = [0];
let divisions = 0;

for (let index = 2; index <= number; index += 1) {
    divisions = 0;
    for (let index2 = 1; index2 <= index; index2 += 1) {
       if (index%index2===0) {
        divisions += 1
        }
        
    }
    

    if (divisions <= 2){
        aux [0] = index;
    }
    
    

}

console.log(aux);























