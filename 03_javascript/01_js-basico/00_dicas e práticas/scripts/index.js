/*

SOBRE DECLARAÇÕES DE VARIÁVEIS

__
Não é possível redeclarar variáveis, apenas atribuir outro valor a uma já declarada(com algumas exceções explicitadas nos arquivos posteriores.)
__



__
Não é possível criar variáveis com palavras reservadas, como por exemplo: if, function, var e etc.:

let if;
let function;
let var;
__



__
Criar variáveis com nomes significativos, ao declarar nome, por exemplo:

NÃO
let n = 'miguel';

SIM
let nome = 'miguel';
__



__
Não começar uma variável com número:

NÂO
let 1nome: 'miguel';

SIM
let nome1: 'miguel';
__



__
Não conter espaços e traços na declaração, utilizar camelCase:

NÃO
let nome-completo: 'miguel tenorio';

SIM
let nomeCompleto: 'miguel tenorio';

OBS: é Case-sensitive, ou seja, é sensível a letras minúscolas e maiúscolas da declaração de uma variável. Se criar uma variável 'nome', deve ser chamada com as letras minúscolas do mesmo modo que foi criada, se chamada 'Nome' retornará erro.
*/