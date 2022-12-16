/* uma função que se lembra do 
ambiente em que ela foi criada
*/
function armazenarSoma(x){
    return y => x + y;
}

//closure
let soma1 = armazenarSoma(3);
console.log(soma1(5)); // 8

let soma2 = armazenarSoma(5);
console.log(soma2(10)); // 15

// contador
function contador(i){
    let cont = i;
    let somaContador = function(){
        console.log(cont);
        cont++;
    }
    return somaContador;
}

let meuContador = contador(5);

meuContador();
meuContador();