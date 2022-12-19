/*
Escreva uma função que recebe um numero, 
e o decrementa de 1 em 1 com um loop
Alem disso imprima somente os numeros pares no console;
*/

function loopDeUmEmUm(num){
    for(let x = num; x >=0; x--){
        if(x % 2 == 0){
            console.log(`Numero ${x} e Par! `)
        }

    }
}

console.log(loopDeUmEmUm(5));