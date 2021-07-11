/*Prefixado executa a ação +1 e mostra o valor*/

let contar = 1;
++contar; // 1 + 1 = 2
console.log(`No prefixado ele incrementa e mostra o resultado ${++contar}`); //1 + 2 = 3

/*Pósfixado executa a ação e não demostra a ação, apenas em uma segunda solicitação*/

let contar1 = 1;
contar1++; // 1 + 1 = 2
console.log(`No pós fixado, ${contar1++}`); // 2 + 1 = 3
console.log(`Apenas na segunda chamada demonstra o último resultado ${contar1}`);

/*Para o decremento é a mesma circunstância, apenas é usado o --, pre e pós fixado*/