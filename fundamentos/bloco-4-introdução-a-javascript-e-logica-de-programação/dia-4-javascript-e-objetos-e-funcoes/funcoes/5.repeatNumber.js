function repeatNumber (array){
    let higherCount = 0;
    let number ;
    for (let index = 0; index < array.length; index += 1) {
    let count = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
        if (array[index] === array[index2]) {
        count += 1;
        }
    }
    if (count > higherCount) {
        higherCount = count;
        number = array[index];
    }
    }

    return number;

}

console.log(repeatNumber([2, 3, 2, 5, 8, 2, 3]))
