/*
Escreva um função que recebe a idade de uma pessoa;
Se ela tem mais de 18 anos ela pode entrar na auto escola,
imprima uma mensagem informando isso;
Se ela tem menos, ela não pode, imprima outra mensagem com
este aviso;
Execute a função nos dois caoso;
*/

function autoEscola(idade){
    if(idade >= 18){
        console.log("Vamos Fazer o Seu cadastro?");
    }
    else{
        console.log("Você não tem idade o suficiente para entrar para a auto Escola!!!");
    }
}

console.log(autoEscola(23));
console.log(autoEscola(10));
