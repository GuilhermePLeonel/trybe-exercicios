
const sum = require('./sum');

  test('teste 1 : a função recebe os parametros (4, 5) e retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('teste 2: a função recebe os parametros (0, 0) e retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('teste 3: a funão retorna um erro se os parametros forem (4, "5")', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  });

  test('teste 4: valida se a mensagem de erro é "parameters must be numbers"', () => {
    try{
      sum(4, '5');
    } catch (e) {
      expect(e.message).toBe('parameters must be numbers');
    }
  });
