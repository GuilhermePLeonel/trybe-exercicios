// exercicio 1

const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} 
    ótimo, fui utilizada no escopo !`);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  } 
}
testingScope(true);


// exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let orderNumbers = () => {
  oddsAndEvens.sort((a,b) => a-b);
}
orderNumbers()

testingScope(true);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); 


// exercicio 2.1
let fatorial = (number) => {
  const array = [number];
  for (let i = number-1; i > 0; i -= 1) {
    array[0] = array[0] * i;
  }
  console.log(array);
}

fatorial(4)


// exercicio 2.2

let longestWord = (phrase) => {
  const wordList = phrase.split(" ");
  let longest = [wordList[0]];
  for (let i = 0; i < wordList.length; i += 1){
    if (wordList[i].length >= longest[0].length) {
      longest[0] = wordList[i];
    }
  }
  console.log(longest);
}
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');


// exercicio 3.4
let word = 'Tryber x aqui!';
let wordList = word.split(' ');
let skills = ['javascript', 'css', 'html', 'bootstrap', 'flexbox']

let xFinder = (string) => {
  for (let i = 0; i < wordList.length; i += 1) {
    if (wordList[i] === 'x') {
      wordList[i] = string;
    }
  }
  let newString = wordList.toString().replace(/,/g, " ");

  let concat = (newString) => {
    console.log(`${newString} Minhas cinco principais habilidades são:
  ${skills.sort()}`);
  }
  concat(newString)

}
xFinder('Guilherme')

// let concat = (newString) => {
//   console.log(`${newString} Minhas cinco principais habilidades são:
//   ${skills.sort()}`);
// }
// concat(newString)
