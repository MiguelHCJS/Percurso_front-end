/*

arrays são criados com []

objetos são criados com {}

*/

const pessoa = {
    //atributos:
    nome: 'Miguel',
    sobrenome: 'Tenório',
    idade: 25
};

console.log(pessoa.nome);

const pessoa2 = {
    nome: 'Rafael',
    sobrenome: 'Tenório',
    idade: 6,
}

console.log(pessoa2.nome);

/*
CRIANDO OBJETOS AUTOMATICAMENTE COM FUNÇÕES
*/

// Os valores que estão entre parenteses, que serão recebidos são chamados de parâmetro:
function criarpessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}
// As funções que criam objetos, que retornam objetos, são chamadas de factory.

// Os valores em estão entre parenteses que serão enviados são chamados de argumentos:
const pessoa3 = criarpessoa('Miguel', 'Tenório', 25);

console.log(pessoa3.nome);

/*
FUNÇÕES EM OBJETOS SÃO CHAMADOS DE MÉTODOS
*/

const pessoa4 = {
    nome: 'Tenório',
    idade: 25,
    dizerOla() {
        console.log(`Olá, pode me chamar de ${this.nome}, eu tenho ${this.idade} anos de idade.`);
    },
    incrementaIdade() {
        ++this.idade
    }
};
// this, referencia aos parâmetros dentro do próprio objeto, do seu próprio contexto

pessoa4.dizerOla();
pessoa4.incrementaIdade();
console.log(`Idade incrementada com um método: ${pessoa4.idade}`);