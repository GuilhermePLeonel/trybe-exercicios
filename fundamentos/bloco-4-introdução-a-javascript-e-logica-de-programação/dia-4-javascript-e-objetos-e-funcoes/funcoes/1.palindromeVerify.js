function palindrome (word){

let array = [];
let reversed = [];
let aux = 0;


for (let index = 0; index<word.length; index+=1){
    array.push(word[index]);
}

for (let index2 = array.length-1; index2>=0; index2-=1){
        reversed.push(array[index2]);
}

for (let index3 = 0; index3<reversed.length; index3+=1){
    if(reversed[index3]===array[index3]){
        aux += 1;
    }
    else{
    }
}

if(aux===array.length){
    return "True";
}
else{
    return "False";
}

}


console.log (palindrome('jasaj'));












