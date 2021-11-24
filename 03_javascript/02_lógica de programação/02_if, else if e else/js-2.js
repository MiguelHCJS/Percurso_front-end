/*

Estrutura if

if (condição) {
    ação que será realizada se condição verdadeira
} else {
    ação que será realizada se a primeira condição não for verdadeira
}

*/

const hora = 19;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Não foi possível identificar a hora!');
};