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
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const count = (answers, student) => {
  let greens = 0;
  for (let i = 0; i < answers.length; i += 1){
    for (let i2 = 0; i2 < student.length; i2 += 1){
      if (i===i2 && answers[i] === student[i2]) {greens += 1 };
    }
  }
  return greens;
}

const HOF = (answers, student, count) => {
  return count(answers, student);
}

console.log(HOF(RIGHT_ANSWERS, STUDENT_ANSWERS, count));