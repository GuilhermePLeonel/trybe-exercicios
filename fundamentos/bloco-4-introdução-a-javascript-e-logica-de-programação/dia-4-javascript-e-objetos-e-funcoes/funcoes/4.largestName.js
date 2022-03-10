function largestName(array){
    let aux = array[0];
    for(let index = 0; index<array.length; index+=1){
        if(array[index].length>aux.length){
            aux = array[index];
        }
        else{

        }
    }
    return aux;
}

console.log(largestName(['José', 'Lucas', 'Nádia','Guilherme',  'Fernanda', 'Cairo', 'Joana']));



