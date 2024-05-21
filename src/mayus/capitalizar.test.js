const capitalizarPalabras = require('./capitalizarPalabras');

test('Convierte una cadena a título', () => {
    const entrada = "hola mundo";
    const salidaEsperada = "Hola Mundo";
    expect(capitalizarPalabras(entrada)).toBe(salidaEsperada);
});

test('Cadena vacía devuelve cadena vacía', () => {
    const entrada = "";
    const salidaEsperada = "";
    expect(capitalizarPalabras(entrada)).toBe(salidaEsperada);
});

test('Cadena ya en título no cambia', () => {
    const entrada = "Hola Mundo";
    const salidaEsperada = "Hola Mundo";
    expect(capitalizarPalabras(entrada)).toBe(salidaEsperada);
});

