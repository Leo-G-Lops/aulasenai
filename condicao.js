let senhaCorreta = '1234';
let senhaDigitada = '1234';
if (senhaCorreta === senhaDigitada){
    console.log('Acesso Permitido');
}else {
    console.log('Senha Incorreta')
}


//criar um programa que valide se a pessoa terá desconto na entrada do cinema.
//Criar 3 variaveis(idade,estudante, precoIngresso). Fazer condição para dar 50% de desconto caso a condição 'estudante' seja true

let idade = 30;
let estudante = true;
precoIngresso = 28.00;
function descontoIngresso(){
    if (estudante === true && idade < 18 || idade > 60) {
        return console.log(`Haverá um desconto de 50% no seu ingresso, o preço será R$ ${(precoIngresso / 2).toFixed(2)}`);
    } 
     else {
        return console.log(`Não será aplicado o desconto no seu ingresso, o preçio será R$ ${precoIngresso.toFixed(2)}`)
    }
}

console.log(descontoIngresso());

// ----

// Calculadora IMC

let peso = 80;
let altura = 1.75;
let imc = peso /(altura * altura);

console.log('Seu IMC é:' + imc.toFixed(2));

if (imc < 18.5){
    console.log('Classificação abaixo do peso')
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Classificação peso normal')
} else if (imc >= 25 && imc < 29.9){
    console.log('Classificação sobrepeso')
} else {
    console.log('Classificação obesidade')
}