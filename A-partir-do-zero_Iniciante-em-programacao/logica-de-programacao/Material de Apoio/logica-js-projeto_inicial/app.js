/*alert('Boas vindas ao jogo do número secreto'); //Alerta apresentado
let numeroSecreto = 3; //Criando variáreis

let chute = prompt('Escolha um número entre 1 e 10:');

if (numeroSecreto == chute){
    console.log('Isso ai, você descobriu o número secreto! ('+ numeroSecreto +')');
} else {
    console.log('Tente novamente.');
}*/

//Desafio 

alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos.');

let mensagemDeErro = 'Erro! Preencha todos os campos.';

alert(mensagemDeErro);

nome = prompt('Qual o seu nome:');
idade = prompt('Sua idade: ');

if (idade >= 18){
    alert('Pode tirar a habilitação');
}
