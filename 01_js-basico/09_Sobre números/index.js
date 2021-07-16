let num1 = 1; // number
let num2 = 3; // number

console.log(`-- Em uma declaração direta, a declaração é 'number' e realiza a soma: 1 + 3 = ${num1 + num2}`);

/*
Podemos converter um number, na sua própria declaração, para que possamos concatenar, usando um método na própria declaração:
*/

num1 = 1;
num2 = 3;

console.log(`-- Aplicando um método em uma das declarações, tornando-a uma 'string', ocorrerá uma concatenação e não uma soma: 1 + 3 = ${num1.toString() + num2}`);

/*
Podemos ver mais algumas coisas interessantes, como converter o número para uma representação binária:
*/

let num3 = 258;
console.log(`-- A representação binária de 258: ${num3.toString(2)}`);

/*
Arredondando um número:
*/

num3 = 258.987130540;
console.log(`-- Arredondando o número 258,987130540, reduzindo para apenas duas casas após a vírgula ${num3.toFixed(2)}`);