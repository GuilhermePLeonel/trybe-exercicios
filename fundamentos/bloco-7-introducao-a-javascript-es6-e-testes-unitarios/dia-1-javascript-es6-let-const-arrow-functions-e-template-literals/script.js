let fatorial = (number) => {
  const array = [number];
  for (let i = number-1; i > 0; i -= 1) {
    array[0] = array[0] * i;
  }
  console.log(array);
}

fatorial(4)