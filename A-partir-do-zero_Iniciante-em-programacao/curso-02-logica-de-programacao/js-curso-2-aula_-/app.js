
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto!');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:')



let tentativas = 0;

//Verificando o chute
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);

function verificarChute(){
    let chute = document.querySelector('input').value;
    tentativas++;
    let mensagem = tentativas == 1 ? `Você encontrou o número correto com ${tentativas} tentativa!` : `Você encontrou o número correto com ${tentativas} tentativas!`;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('p', mensagem);
    }else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', `O numero secreto é MAIOR que ${chute}.`);
        }else{
            exibirTextoNaTela('p', `O numero secreto é MENOR que ${chute}.`);
        }
    }
}