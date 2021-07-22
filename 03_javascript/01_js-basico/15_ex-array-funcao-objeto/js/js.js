// função de contexto global
function meuEscopo() {
    // selecionando o formulário e a área de resultado
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    // array criado para receber objetos e indexar
    const pessoas = [];

    /*
    A FUNÇÃO SEGUINTE FAZ:
    
    1° EVITA A PÁGINA SER RECARREGADA TODA VEZ QUE PRESSIONADO O BOTÃO ENVIAR(SUBMIT)

    2° RECEBE OS VALORES ADICIONADOS PELO USUÁRIO NOS CAMPOS DE INPUT DO FORMULÁRIO

    3° COM O MÉTODO PUSH, ACRESCENTA NO ARRAY ANTERIORMENTE CRIADO OS VALORES DIGITADOS PELO USUÁRIO

    4° DEMONSTRA OS VALORES NO CONSOLE E OS INSERE NO HTML
    */
    function recebe (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value}<br> Sobrenome: ${sobrenome.value}<br> Peso: ${peso.value}<br> Altura: ${altura.value}</p>`;
    };

    // QUANDO O EVENTO SUBMIT É SELECIONADO, EXECUTA A FUNÇÃO ANTERIORMENTE CRIADA
    form.addEventListener('submit', recebe);
};

meuEscopo();