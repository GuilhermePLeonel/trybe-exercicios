function sum (n){
let sum = 0;

for (let index = 0; index <=n; index +=1){
    sum += index
}

return sum;
}

console.log(sum(5));