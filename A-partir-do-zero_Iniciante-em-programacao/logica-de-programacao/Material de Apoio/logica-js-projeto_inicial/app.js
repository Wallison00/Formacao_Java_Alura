alert('Boas vindas ao jogo do número secreto'); //Alerta apresentado
let numeroSecreto = 3; //Criando variáreis

let chute = prompt('Escolha um número entre 1 e 10:');

if (numeroSecreto == chute){
    console.log('Isso ai, você descobriu o número secreto! ('+ numeroSecreto +')');
} else {
    console.log('Tente novamente.');
}