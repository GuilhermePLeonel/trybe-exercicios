
const { array } = require('yargs');
const {sum, myRemove, myFizzBuzz} = require('./sum');


describe('1º Função: sum ', () => {
  test('teste 1 : a função recebe os parametros (4, 5) e retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('teste 2: a função recebe os parametros (0, 0) e retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('teste 3: a funão retorna um erro se os parametros forem (4, "5")', () => {
    expect(() => { sum(4, '5') }).toThrow('parameters must be numbers');
  });

  test('teste 4: valida se a mensagem de erro é "parameters must be numbers"', () => {
    try {
      sum(4, '5');
    } catch (e) {
      expect(e.message).toBe('parameters must be numbers');
    }
  });

});


describe('2º Função: myRemove ', () => {
  test('teste 1 : a função recebe os parametros ([1, 2, 3, 4], 3) retorna o array sem o 3', () => {
    const numeros = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(numeros, 3));
  });

  test('teste 2 : a função recebe os parametros ([1, 2, 3, 4], 3) e retorna um array diferente de [1, 2, 3, 4]', () => {
    const numeros = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).not.toEqual(myRemove(numeros, 3));
  });

  test('teste 3 : a função recebe os parametros ([1, 2, 3, 4], 5) retorna o array sem alterações', () => {
    const numeros = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).toEqual(myRemove(numeros, 5));
  });
});


describe('3º Função: myFizzBuzz ', () => {
  test('teste 1 : a função recebe o parametro 15 e retorna "fizzbuzz"', () => {
    const numeros = [1, 2, 3, 4];
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

});