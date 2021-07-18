/* BÁSICO DE ARRAYS */

/* Pode ser colocado qualquer coisa em um único array, porém é uma boa prática separar os tipos de coisa a ser guardado em um único array */

const login = ['carlos', 'miguel', 'tenorio', 'santos'];
const idade = [25, 30, 20, 15];

console.log(`Nomes no array login: ${login}`);

/* Podemos acessar os elementos do array, por meio do seu index */

console.log(`O index número 2 do array login: ${login[2]}`); // Mostrará tenorio
console.log(`O array idade: ${idade}`);
console.log(`O index 0 no array idade: ${idade[0]}`); // 25

/* Podemos também editar valores */

login[3] = 'Tenorio';

console.log(`O index de número 3 foi substituído, de santos para Tenorio: ${login}`); // santos foi substituído por Tenorio

/* Podemos também ver o tamanho do array */

console.log(`Tamanho do array: ${login.length}`);

/* Adicionar novos elementos no final do array */

login.push('Silva');
login.push('Ferreira');
console.log(`Elementos inseridos no final: ${login}`);

/* Adicionar novos elementos no começo do array */

login.unshift('Pardo');
login.unshift('Rocha');
console.log(`Elementos inseridos no começo: ${login}`);

/* Remover elementos do final do array */

login.pop(); // Removeu o Ferreira
login.pop(); // Removeu o Silva
console.log(`Elementos Ferreira e Silva removidos do fim do array: ${login}`);

/* Remover elementos do começo e guardando o elemento removido */

const removidos = login.shift();
console.log(`Elemento Rocha removido do começo: ${login}`);

/* Deletar elemento e deixar espaço vazio */

delete login[4];
login.push('Gabriel');
console.log(`Elemento de index 4, removido: ${login}`); //Observar espaço vazio