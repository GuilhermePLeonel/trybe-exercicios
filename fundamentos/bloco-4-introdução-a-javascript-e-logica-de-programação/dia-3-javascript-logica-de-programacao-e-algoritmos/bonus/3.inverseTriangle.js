let n = 5;
let aux = "";

for (let index = 0; index < n; index += 1) {
  aux = "";
  for (let index2 = 0; index2 <= n; index2 += 1) {
    if(index + index2 > 4){
        aux += "*";
    }
    else{
        aux += " ";
    }
  }
  console.log(aux);
}
