const esPrimo = require('./Primo');

test('Número primo devuelve true', () => {
    expect(esPrimo(7)).toBe(true); 
});

test('Número no primo devuelve false', () => {
    expect(esPrimo(8)).toBe(false); 
});

test('El número 1 no es considerado primo', () => {
    expect(esPrimo(1)).toBe(false); 
});

test('Número negativo no es considerado primo', () => {
    expect(esPrimo(-5)).toBe(false); 
});
