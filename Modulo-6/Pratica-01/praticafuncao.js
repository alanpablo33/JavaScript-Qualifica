function resolve(num1,num2){
    let soma = num1 + num2;
    let div = num1 / num2;
    let mult = num1 * num2;
    let sub = num1 - num2;
    let ress = num1 % num2;
    let exp = num1 ** num2;

    console.log(`A Soma dos numeros é ${soma}`);
    console.log(`A Divisão dos numeros é ${div}`);
    console.log(`A Multiplicação dos numeros é ${mult}`);
    console.log(`A Subitração dos numeros é ${sub}`);
    console.log(`O Resto dos numeros é ${ress}`);
    console.log(`O Expoente dos numeros é ${exp}`);
}

resolve(2,4);

const soma = function(a,b){
    return a + b;
}

console.log(soma(3,5));

const saudacao = function(nome){
    if(nome == "Alan"){
        return "Ola Alan";
    }
}

console.log(saudacao("lan"));

function podeDirigir(idade,cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode Dirigir")
    }
    else{
        console.log("Não Pode dirigir!")
    }
}
 let idade = 17
 let cnh = true
podeDirigir(idade,cnh);

// escopo de uma função
// O que acontece dentro de uma função fica separado do escopo global;
// o escopo global seria todo o arquivo de JavaScrip
// da mesma forma com if

let n = 10;

const numero = function(){
    let n = 25;
    console.log(n);
}

console.log(n); // n global
numero()// n dentro da função



