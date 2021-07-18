/* BÁSICO DE FUNÇÕES */

/* Função executa ações */

// UMA MANEIRA DE EXECUTAR FUNÇÕES
const nome = prompt('Qual é o seu nome?'); // variável global

function saudacao(){
    alert(`Olá ${nome}`);
};

saudacao();

function despedida(){
    const nome2 = 'Tenorio'; // variável local
    console.log(`Até logo ${nome2}`);
}

despedida();

/*

console.log(`Uma variável criada dentro de uma função(variável local), apenas é aplicada dentro da função: ${nome2}`);

Ao tentar executar a instrução acima, retornaria um erro, pois a variável 'nome2', pertence apenas a função 'despedida'.

*/


/*

Variável local é utilizada apenas no contexto onde foi criada,
já uma variável global pode ser reutilizada para outras instruções.

*/

/*
OUTRA MANEIRA DE EXECUTAR FUNÇÕES
RECEBENDO VALORES
*/
const var1 = Number(prompt("Digite um número?"));
const var2 = Number(prompt("Digite outro número"));

function somarValores(){
    const resultado = var1 + var2;
    return resultado;
}

const resultado = somarValores();
alert(`A soma dos números ${var1} + ${var2} = ${resultado}`);

/*
OUTRA MANEIRA
*/

const n = Number(prompt('Digite um número e descubra sua Raiz quadrada?'));

function raiz(n){
    return n ** 0.5;
}

alert(`A Raiz quadrada de ${n} é ${raiz(n)}`);