// Primeiro exercicio
const somebody = (nomeCompleto) => {
 const object = {
   nomeCompleto,
   email : `${nomeCompleto.replace(/ /g, "_")}@trybe.com`
 }
 return object;
}


const newEmployees = () => {
  const employees = {
    id1: somebody('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: somebody('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: somebody('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());

// Segundo exercicio
const check = (number, randomNumber) =>{
  return number === randomNumber;
}

const lotery = (number, check) => {
  const randomNumber = Math.floor((Math.random() * 5) + 1);
  if (check(number, randomNumber) === true) {
    return "Parabéns você ganhou";
  }
  return "Tente novamente"
}

console.log(lotery(3, check));



// Terceiro exercicio


console.log(Math.floor((Math.random() * 11) + 1))