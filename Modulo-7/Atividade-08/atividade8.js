/*
Escreva uma função que recebe uma string;
Se o texto conter mais de 10 caracteres imprima
"Texto muito longo";
Se conter menos, imprima "Texto dentro do limite"
*/

function checarTamanhoTexto(texto){
    if(texto.length> 10){
        console.log(`Texto Muito Logo ${texto}`)
    }
    else{
        console.log(`Texto Curto ${texto}`)
    }
}

console.log(checarTamanhoTexto("Alan Pablo Alves"))
console.log(checarTamanhoTexto("Alan "))