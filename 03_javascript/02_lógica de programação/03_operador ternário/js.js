// (condição) ? (valor verdadeiro) : (valor falso)

// Serve para incurtar a linha de código, diante da condição aplicada.

const pontos = 500;
const pontosGerais = pontos >= 1000 ? 'VIP' : 'COMMOM';

// Condição com operador ternário
console.log(`User ${pontosGerais}`)



// Condição completa sem operador ternário
if (pontos >= 1000) {
    console.log('Vip');
} else {
    console.log('commom');
}

// Pode servir também para configurar um valor padrão para uma variável

const Cor = null;
const Corpadrao = Cor || 'Red';
console.log(`Cor de fundo: ${Corpadrao}`);
