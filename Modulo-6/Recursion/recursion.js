/*
Uma Função se chama novamente
*/

function retornaNumeroPar(n){
    if(n % 2 == 0){
        console.log("n agora é par: " + n);
    }
    else{
        console.log(n);
        retornaNumeroPar(n - 1);
    }
}

retornaNumeroPar(33);