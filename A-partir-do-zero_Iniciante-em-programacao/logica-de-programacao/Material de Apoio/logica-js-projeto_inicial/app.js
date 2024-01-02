
alert(`Boas vindas ao jogo do número secreto`); //Alerta apresentado
let numeroSecreto = 3; //Criando variáreis
let tentativas = 0;

console.log(`Número Secreto: (${numeroSecreto})`);

let chute;
console.log(`Número Preenchido: (${chute})`);

// enquanto == while
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e 10:`);
    tentativas ++;
    
    if(numeroSecreto == chute){
        alert(`Isso ai, você descobriu o número secreto (${numeroSecreto}) na ${tentativas}º tentativa.`);
    }else{
        if(numeroSecreto > chute){
            alert(`${tentativas}º Tentativa - O número secreto é MAIOR que (${chute})! Tente novamente.`); 
        }else{
            if(numeroSecreto < chute){
                alert(`${tentativas}º Tentativa - O número secreto é MENOR que (${chute})! Tente novamente.`);
            }
        }
    }
}
