/*
Esta mensagem é exibida em uma caixa no navegador
*/
alert('olá!');

/* 
Esta mensagem é exibida em uma caixa no navegador, com duas respostas possíveis:

cancelar ou okay.

Sendo que:

cancelar um valor boolean = false
okay um valor boolean = true
*/
confirm('Tudo okay?');

/*
Esta mensagem é exibida no navegador e captura uma resposta que o usuário digitar.
*/
prompt('Como está o seu dia?');

/*
Quando uma função está dentro de um objeto, ela é chamada de método.

E quando está fora do objeto é chamadode função.
*/

/*
A confirm e prompt, podem armazenar a resposta do usuário, basta criar uma variável e atribuir a resposta a ela
*/

let msg = prompt('O que você tem ligo?');
alert(`Continue assim, ${msg} parece ser uma ótima leitura.`);