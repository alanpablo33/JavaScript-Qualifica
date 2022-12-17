/*
Escreva uma função que detecta o tipo de dado passado;
Verifique se é um, number,boolean ou string;
E retorne uma mensagem para cada tipo;
Execute uma função para cada caso;
*/

function detectarTipoDaVariavel(dado){
    if(typeof dado === 'string' ){
        console.log(`O Dado Passado e uma String`);
    } 
    else if(typeof dado === 'number'){
        console.log(`O Dado Passado e uma Number`);
    }
    else{
        console.log(`O Dado Passado e uma Boolean`);
    }
}

detectarTipoDaVariavel("Alan");
detectarTipoDaVariavel(25);
detectarTipoDaVariavel(true);