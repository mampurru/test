const factorial= require('./factorial');

test('factorial de cualquier numero positivo', () => {
    const num = -7;

let result=1;

for(let i=1; i<=num; i++){
    result *=i;
    }
    console.log(`El factorial de ${num} es:`, result);
    expect(factorial(num)).toBe(result);
    
})

test('factorial (0) should return 1', () => {
    expect(factorial(0)).toBe(1)
})
test('Factorial de un número negativo debería devolver NaN', () => {
    const num = -7; 
    console.log(`El factorial de ${num} es: NaN`);
    expect(factorial(num)).toBeNaN();
});

