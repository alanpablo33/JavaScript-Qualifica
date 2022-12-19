/*
Escreva uma função que receba dois numeros,
o primeiro é a base e o segundo a potencia;
Depois faça essa operação e retorne o resultado;
Por exemplo: 3,2=9 
*/

function operacao(x,y){
    t = x ** y;
    return t;
}

console.log(operacao(2,2));
console.log(operacao(2,4));
console.log(operacao(5,2));