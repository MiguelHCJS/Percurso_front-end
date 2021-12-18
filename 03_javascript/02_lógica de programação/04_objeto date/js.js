/* 
É uma função contrutora
O uso da palavra 'new' em uma variável, demonstra que se trata de uma função construtora
E a função começa sempre com a letra maiúscola
*/

const data = new Date(0); // (curiosidade) O 0 representa a data de 01/01/1970 Timestamp unix OU época unix
console.log(`Horário: ${data}`);

const dataHoje = new Date(2021, 11, 18, 19);
console.log(`Data de hoje: ${dataHoje}`);

const dataString = new Date('2021-12-18 19:00:00');
console.log(`Data de hoje, formato String: ${dataString.toString()}`);

/*
Porém o fuso horário influência para a precisão, levando a seguinte lógica no meu caso
fuso GMT-0300 (horário de Brasília-BR) somar a data que gerou: 31 de dez 1969 21:00 + 03:00 = 01/01/1970
*/

// O date é contado com milésimo de segundos, com a seguinte ordem no parâmetro

/*
Primeiro formato
Date(2021, 12, 18, 19) = 18/12/2021 às 19:00 - ano, mes, dia, hora, minuto, segundos, milésimos de segundo
*/


/* 
Segundo formato
Date(2021-12-18 19:00:00) - Data com formato String
*/

//Mais definições e usos em : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date