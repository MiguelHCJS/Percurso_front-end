/*
-- DADOS PRIMITIVOS (imutáveis): string, number, boolean, undefined, null, bigint e symbol.

let nome = 'Miguel';
nome = 'tenório';

Este exemplo acima não é mudar, é trocar um valor por outro.

-- DADOS POR REFERÊNCIA (mutável): array, object, function

*/


/* PRIMITIVOS */
let nome = 'Miguel';
nome[0] = 'T';
console.log(nome[0], nome);
// É imutável

let a = 'A';
let b = a; //Em dados primitívos ele faz uma cópia do valor
console.log(a, b);

a = 'C';
console.log(a, b); // Variável 'b', fez uma cópia e não é alterado

/* POR REFERÊNCIA */

let array1 = [1, 2, 3];
let array2 = array1;
console.log(array1, array2);

array1.push(4);

console.log(array1, array2); // Mantem o link por referência, apontam para o mesmo lugar