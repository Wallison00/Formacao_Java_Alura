//Desafio 3

//Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagemDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

console.log(linguagemDeProgramacao);

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagemDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagemDeProgramacao);

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let listaNomes = ['Wallison', 'Josivania', 'Tatu-Apê'];

console.log(listaNomes[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

console.log(listaNomes[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

let posicaoArray = listaNomes.length - 1;

console.log(listaNomes[posicaoArray]);