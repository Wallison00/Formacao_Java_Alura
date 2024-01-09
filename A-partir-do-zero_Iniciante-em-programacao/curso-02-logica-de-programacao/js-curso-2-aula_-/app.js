// apontar para o html
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Criar uma função 
//Verificar se a função verificarChute foi clicada no HTML

function verificarChute(){ //Função sem parâmetro e sem retorno
    console.log('O botão foi clicado!');
};



//Parâmetros com funções
function exibirTextoNaTela(tag, texto){ //Função com parâmetro e sem retorno
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto!');//Execução da função através dos parâmetros
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');



//Função sem parametro com retorno.
let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}


//Exemplo acima
function chamadaFuncao(){
    //console.log(gerarNumeroAleatorio()); //Chama direto a função
    console.log(numeroSecreto); //Repete o valor capturado pela função
}


//Capturando informação digitada
function informacaoDigitada(){
    let digitada = document.querySelector('input').value;
    console.log(`O valor digitado foi (${digitada})`);
}




let captura = document.getElementsByClassName('input');
