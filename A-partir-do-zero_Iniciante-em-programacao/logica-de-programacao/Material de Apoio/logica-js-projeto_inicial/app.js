
alert(`Boas vindas ao jogo do número secreto`); //Alerta apresentado
let numeroSecreto = 3; //Criando variáreis

console.log(`Número Secreto: (${numeroSecreto})`);

let chute = prompt(`Escolha um número entre 1 e 10:`);
console.log(`Número Preenchido: (${chute})`);

if (numeroSecreto == chute){
    //Para apresentar uma string não é preciso ter as pas simples, o usuo da crase `` substitui, e para declarar uma variável na string é utilizado ${variável}
    console.log(`Isso ai, você descobriu o número secreto! (${numeroSecreto})`); 
    alert(`Isso ai, você descobriu o número secreto! (${numeroSecreto})`);
} else {
    console.log(`Você errou, tente novamente.`);
}