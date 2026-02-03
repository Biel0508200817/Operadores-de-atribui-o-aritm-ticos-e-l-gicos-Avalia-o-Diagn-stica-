/**
 * Dada a seguinte expressão:

let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);


Qual será o valor final de `z`? Justifique seu raciocínio.
 */
let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);
// Resposta:  26.5
// Justificativa:
// 1. O operador de pré-decremento (--y) é avaliado primeiro, então y se torna 9.
// 2. O operador de pós-incremento (x++) é avaliado em seguida, então x se torna 6, mas o valor utilizado na expressão é 5.
// 3. A expressão se torna: (5 * 9) / 2 + (9 % 3).
// 4. O resultado da multiplicação é 45, então temos: 45 / 2 + 0.
// 5. A divisão resulta em 22.5, então z é igual a 22.5.
console.log(z); // 22.5