/*
Escreva uma função que 
retorne um numero aleatorio;
O Numero maximo retornado deve ser 
passado via paremetro
Dica: utilize Math.random();
*/

function numeroAleatorio(x){
    // flor para aredondar o valor é o + 1 para ele aredondar pra cima
    num = Math.floor(Math.random() * x ) + 1;
    return num;
}

console.log(numeroAleatorio(100));