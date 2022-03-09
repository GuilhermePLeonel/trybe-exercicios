let array = [];

for (let aux = 1; aux<26; aux+=1){
    array.push(aux);
}

console.log(array);


console.log("estão são os elementos do array acima quando multiplicados por 2:")
for (let indice = 0; indice<array.length; indice+=1){
    console.log(array[indice]*2);

}