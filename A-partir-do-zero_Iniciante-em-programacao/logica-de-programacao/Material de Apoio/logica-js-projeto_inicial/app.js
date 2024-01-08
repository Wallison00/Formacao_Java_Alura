
alert(`Boas vindas ao jogo do número secreto!`);

//Geração do número de forma aleatória (parseInt() -> considera somente numeros inteiros) + (Math.random() -> Gera numeros aleatórios entre 0 e 1)
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(`Numero Secreto: (${numeroSecreto})`);

let numeroTentativas = 0;
console.log(`Número de Tentativas: (${numeroTentativas})`);

let chute = null;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e 10:`);
    numeroTentativas ++;

    if(chute == numeroSecreto){
        break;
    }else{
        if(chute < numeroSecreto){
            alert(`O número secreto é MAIOR que ${chute}!`);
            console.log(`MAIOR`);
        }else{
            if(chute > numeroSecreto){
                alert(`O número secreto é MENOR que ${chute}!`);
                console.log(`MENOR`);
            }else{
                alert(`Erro desconhecido!`);
                break;
            }
        }
    }
}
// Comparativo onde se o numero de tentativass for igual a 1 é retornado a primeira opção, se não retorna a segunda.
let textoTentativas = numeroTentativas == 1 ? `tentativa` : `tentativas`;
alert(`Você acertou o número secreto (${numeroSecreto}), com ${numeroTentativas} ${textoTentativas}`);
