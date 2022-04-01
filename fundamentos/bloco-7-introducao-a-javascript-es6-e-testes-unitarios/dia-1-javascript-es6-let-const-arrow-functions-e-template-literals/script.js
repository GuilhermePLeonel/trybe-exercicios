const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let orderNumbers = () => {
  oddsAndEvens.sort((a,b) => a-b);
}
orderNumbers()

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

