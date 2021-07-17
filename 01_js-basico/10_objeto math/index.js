let num1 = 9.5842;

// Arredondar para baixo

let num2 = Math.floor(num1);
console.log(`Arredondamento para baixo, de 9.5842: ${num2}`);

// Arredondar para cima

let num3 = Math.ceil(num1);
console.log(`Arredondamento para cima, de 9.5842: ${num3}`);

// Arredondar

let num4 = Math.round(num1);
console.log(`Arredondamento automatico, de 9.5842: ${num4}`);

// Maior número de uma sequência, 5, 10, 15, 25, 85, 49, 3, 1, 2, 6

console.log(`Maior número de um conjunto: ${Math.max(5, 10, 15, 25, 85, 49, 3, 1, 2, 6)}`);

// Menor número de uma sequência, 5, 10, 15, 25, 85, 49, 3, 1, 2, 6

console.log(`Maior número de um conjunto: ${Math.min(5, 10, 15, 25, 85, 49, 3, 1, 2, 6)}`);

// Gerar número aleatório

let aleatorio = Math.random();
console.log(aleatorio);

// Gerar aleatório arredondado, de 1 a 100

let aleatorio2 = Math.round(Math.random() * (100 - 1));
console.log(aleatorio2);