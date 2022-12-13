/*
faça uma estrutura if/else para verificar se um user pode dirigir;
Armazene em variaveis algumas informações sobre o user;
idade e CNH
Se a idade for maior que 18 e não possuir CNH, exiba uma
mensagem;
Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
Se não tiver 18 nem CNH, exiba outra mensagem;
*/

let idade = 18;
let cnh = true;

if(idade >= 18 && cnh == true ){ 
    console.log("Você esta apito para dirigir!")
}
else if(idade > 18 && cnh != true){
    console.log("O Carro Foi apreendido!")
}
else{
    console.log("Você não tem idade e nem carteira para dirigir!")
}