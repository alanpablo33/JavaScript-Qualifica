// função built-in:prompt() pede um dado para o user
let idade = prompt("Qual Sua Idade? ");
console.log(idade);
let nome = prompt("Qual o Seu nome? ");
console.log(nome);
console.log(`Seu Nome é ${nome}, e sua idade é ${idade}`);


// função built in: alert, exibe uma msg na tela do user
alert("Essa é a mensegem criada pelo alert");
alert(`Seu Nome e ${nome} é sua idade e ${idade}`);

//função built in: Math.x(), utilizada para calculos matematicos
let maiorNumero = Math.max(1,5,2,89,1000,3);
//ira retornar o maior numero 
console.log(maiorNumero);
//ira retornar o menor numero
let menorNumero = Math.min(1,5,2,89,1000,3);
console.log(menorNumero)
let arredondar = Math.round(1.000554);
console.log(arredondar)
let arredondarMenor = Math.ceil(1.000554);
console.log(arredondarMenor)