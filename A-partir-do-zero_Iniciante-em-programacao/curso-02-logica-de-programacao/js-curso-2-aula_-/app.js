// apontar para o html
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Criar uma função 
//Verificar se a função verificarChute foi clicada no HTML
function verificarChute(){
    console.log('O botão foi clicado!');
};