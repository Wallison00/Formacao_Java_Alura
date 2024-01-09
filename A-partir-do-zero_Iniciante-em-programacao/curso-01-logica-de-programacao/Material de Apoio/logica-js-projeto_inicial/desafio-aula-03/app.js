//Desafio aula 03
//1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
/*
let contador = 1;

while(contador <= 10 ){
    console.log(`Contagem ${contador}`);
    contador = contador + 1;
}*/

//2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
/*
let contador = 10;

while(contador >= 0){
    console.log(`Contagem ${contador}`);
    contador = contador - 1;
}*/

//3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
/*
let contagem = prompt(`Digite um número:`);
console.log(`Contagem ${contagem}`);

while(contagem != 0){
    
    if(contagem > 0){
        contagem --;
    }else{
        if(contagem < 0){
            contagem ++;
        }else{
            console.log(`Erro desconhecido!`);
        }
    }
    
    console.log(`Contagem ${contagem}`);

}
*/
//4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero_informado = prompt(`Digite um número: `);
console.log(`Contador: ${numero_informado}`);

while(numero_informado != 0){
    
    if(numero_informado > 0){
        numero_informado --;
    }else{
        if(numero_informado < 0){
            numero_informado ++;
        }else{
            console.log(`Erro desconhecido!`);
        }
    }
    console.log(`Contador: ${numero_informado}`);
}

    

