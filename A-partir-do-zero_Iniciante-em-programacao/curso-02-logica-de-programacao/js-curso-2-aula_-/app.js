
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
    
    let chute = document.querySelector('input').value;//Atribui um valor ao campo de preenchimento
    tentativas++;

    //apresenta a mensagem de quantidade das tentativas.
    let mensagem = tentativas == 1 ? `Você encontrou o número correto com ${tentativas} tentativa!` : `Você encontrou o número correto com ${tentativas} tentativas!`;

    if(chute == numeroSecreto){
        exibirTextoNaTela('p', mensagem);
        
        //Buscar o elemento que tem id = reiniciar e remover o atributo desasabilitado do elemento
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', `O numero secreto é MAIOR que ${chute}.`);
        }else{
            exibirTextoNaTela('p', `O numero secreto é MENOR que ${chute}.`);
        }
    }
    //limpar campo do input
    limparCampo();
}

//Limpar campo atribuindo um valor vazio ao campo
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};