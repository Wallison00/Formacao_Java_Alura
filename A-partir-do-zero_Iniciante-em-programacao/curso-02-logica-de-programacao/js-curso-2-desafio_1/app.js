//Desafio
/*
//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarConsole(){
    console.log('O botão foi clicado');
};

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function verificarAlerta(){
    console.log('Eu amo JS!');
};

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function verificarPrompt(){
    let nomeCidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${nomeCidade} e lembrei de você!`);
}

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function soma(){
    //convertendo em número para que a soma dê certo
    let numero01 = parseInt(prompt('Digite o 1° número:'));
    let numero02 = parseInt(prompt('Digite o 2° número:'));

    let resultado = numero01 + numero02;

    alert(`O resultado da soma é ${resultado}`);
}
*/

//Desafio Aula 3

// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, 
//em quilogramas, que serão recebidos como parâmetro.
/*
function calculadoraIMC(altura, peso){
    return imc = peso/(altura * altura);
}

resultado = calculadoraIMC('1.70', '112');
console.log(resultado);
*/

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
/*
let fatorial = 7;
console.log(`${fatorial}! é:`);
fat(fatorial);

function fat(numero){ //4
    
    multiplicador = numero - 1; //3

    while(multiplicador != 0){
        numero = calculadora(numero, multiplicador);
        multiplicador--;
    }

    //console.log(numero);
};

function calculadora(numero, multiplicador){
    resultado = numero * multiplicador;
    console.log(`${numero} * ${multiplicador} = (${resultado})`);
    return resultado;
}
*/

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
//Para isso, considere a cotação do dólar igual a R$4,80.

/*
let valorParaConverter = conversor(4.8);

console.log(`Valor em dolar: ${valorParaConverter}`);


function conversor(valor) {

    valorCotado = (valor / 4.8);
    
    return valorCotado;
}
*/




// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
/*
let base = 2;
let altura = 2;

calculadora(base, altura);

function calculadora(base, altura){
    area = base * altura;
    perimetro = (base * 2) + (altura * 2);
    console.log(`O valor da área é (${area}) e o valor do perimetro é (${perimetro})`);
}*/

//área = base * altura


// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
 
//Perimetro = 2 * PI * R
//Área = pi * R^2       Calculo da potência (x ** y)
/*
retorno(2);

function retorno(raio){
    areaCirculo = 3.14 * (raio ** 2);
    perimetroCirculo = 2 * 3.14 * raio;

    console.log(`O valor da área do císculo é (${areaCirculo}) e o valor do perimetro do císculo é (${perimetroCirculo})`);
}*/

// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
/*
tabuada(5);

function tabuada(numero){
    contador = 0;
    while(contador < 10){
        resultado = numero * contador;
        console.log(`${numero} * ${contador} = ${resultado}`);
        contador++;
    }
}*/