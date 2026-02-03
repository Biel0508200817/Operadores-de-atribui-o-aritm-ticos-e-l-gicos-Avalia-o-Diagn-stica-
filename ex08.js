/**
 * Considere a expressão abaixo:


let resultado = 10 + 5 * 2 > 20 && !false;


Qual será o valor da variável `resultado`? Justifique sua resposta.
 */

let resultado = 10 + 5 * 2 > 20 && !false;

// Resposta:    true                                                                            
// Justificativa:
// A expressão é avaliada seguindo a ordem das operações matemáticas e lógicas.
// Primeiro, a multiplicação é realizada: 5 * 2 = 10.
// Em seguida, a soma: 10 + 10 = 20.
// A comparação 20 > 20 resulta em false.
// Por fim, temos false && true, que resulta em false.
console.log(resultado); // false
