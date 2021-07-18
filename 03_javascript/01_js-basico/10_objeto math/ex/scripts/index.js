/* Primeiro, pegamos um número que o usuário pode digitar */
const num = Number(prompt('Digite um número?'));

/*

Segundo, selecionamos as tags do HTML pelo seu 'id', que receberão:

*/
const numero = document.getElementById('numero-teste');
const txt = document.getElementById('texto');

/*

-- O valor do número obtido do usuário.

-- E a tag que receberá uma sequência de testes do número obtido, por meio de incrementos(+=).

*/

// Inserção de número no H1 do HTML
numero.innerHTML = num;

// Inserção por meio de incremento, na DIV do HTML
txt.innerHTML = `A Raiz quadrada é: ${num ** 0.5}<br />`;
txt.innerHTML += `${num} é um numero inteiro? ${Number.isInteger(num)}<br />`;
txt.innerHTML += `${num} é um NaN? ${Number.isNaN(num)}<br />`
txt.innerHTML += `Arredondando-o para baixo: ${Math.floor(num)}<br />`;
txt.innerHTML += `Arredondando-o para cima: ${Math.ceil(num)}<br />`;
txt.innerHTML += `Arredondando-o com duas casas decimais: ${num.toFixed(2)}`;