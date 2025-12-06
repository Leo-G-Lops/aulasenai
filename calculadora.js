//Inserir um console.log para ser o 'titulo'
// criar 3 variaveis(nome, anoNascimento, anoAtual)
// criar uma função sem parâmetro que calcula idade, usando return
// chamar a função e mostrar o resultado
// ---------

// criar uma função com parametros para fazer o mesmo cálculo de idade da questão acima
//--------------

//criar uma função com parâmetro e return para mostrar a quantidade de Dias vividos
//--------

//criar uma função para verificarr se é maior de idade (com if e else)
console.log('Cálculo de')
let nome = 'Leonardo';
let anoNascimento = 1995
let anoAtual = 2025
function calcularIdade(){
    return anoAtual - anoNascimento
}
console.log(`A idade de ${nome} é de ${calcularIdade()} anos.`)


function calculoIdade(nascimento,atual){
    return atual - nascimento
}
console.log(`Sua idade é de ${calcularIdade(1995,2025)} anos`);


function diasVividos(idade){
    return idade * 365
}

console.log(`Você já viveu ${diasVividos(30)} dias`);

function maiordeIdade(idade){
    if (idade >= 18){
    return console.log("Você é maior de idade");
} else {
    return console.log("Você é menor de idade");
}
}
console.log(maiordeIdade(30));
