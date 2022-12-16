function nomeComIdade(nome,idade){
    if(idade === undefined){
        console.log("Seu nome é" + nome);
    }
    else{
        console.log("Seu nome é " + nome + "e você tem " + idade + " anos");
    }
}

nomeComIdade("Alan");
nomeComIdade("Alan",25);

// argumento com valor defalt
/* você passa a frase no primeiro 
parametro e no segundo caso não
passe ele ira repetir duas vezes
*/

function repetirFrase(frase, n=2){
    for(let x = 1; x <= n; x++){
        console.log(frase + " " + x);
    }
}

repetirFrase("Ola Mundo!!!", 20);
repetirFrase("Só Duas vezes");

function potencia(base,expo=2){
    return Math.pow(base,expo);
}

console.log(potencia(2,5));