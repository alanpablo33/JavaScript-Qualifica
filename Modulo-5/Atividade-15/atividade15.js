/*
verifique se o numero e primo!
Um número primo é um número inteiro que é divisível 
apenas por 1 e por ele mesmo. Por exemplo, o número 7 
é um número primo, pois pode ser dividido apenas pelo 
número 1 e pelo número 7. Números primos são 
considerados muito importantes na matemática e têm 
muitas aplicações em várias áreas, como a criptografia 
e a teoria dos números.
*/

let num = 41;
let div = 0;

for(let i = 1; i <= num; i++){
    if(num % i ==0){
    div++;
    }
}

if(div == 2){
    console.log(`O Numero ${num} é primo`);
}
else{
    console.log(`O Numero ${num} não é primo`);
}