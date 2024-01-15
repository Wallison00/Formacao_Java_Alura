
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function situacaoInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
    return tentativas = 0;
}

situacaoInicial();

//Geração de numero aleatorio
function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 10 + 1);
};



//Verificando o chute
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

//Reiniciar Jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    tentativas = 0;
    //limparCampo();
    situacaoInicial();
    //Reiniciar o stado do atributo disable
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


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


//Documentação sobre lista [array]

//Ex.
let numeros = [1, 5, 8];
console.log(numeros[2]);

let linguagens = ['JavaScript', 'Python', 'Java'];
console.log(linguagens);