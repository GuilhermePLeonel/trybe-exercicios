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