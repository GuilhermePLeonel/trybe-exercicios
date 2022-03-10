function higherValue(array) {
  let aux = [array[0]];  
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] > aux[0]){
        aux[0] = array[index];
    }
  }
  return array.indexOf(aux[0]);
}


console.log(higherValue([2, 3, 6, 7, 10, 18]));


