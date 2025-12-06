//1-//Criar uma função de boas vindas (sem parametro)com dois consoles e frases
// chamar a função.

function mensagemdeBoasVindas(){
    console.log("Seja Bem-Vindo!")
    console.log("Estamos felizes com sua presença!")
}

mensagemdeBoasVindas();

//2 - Criar uma função com dois parametros dentro da função criar uma variavel para calcular a soma de dois números e um console mostrando o resultado
//chame a função para mostrar vários resultados

function somadeNumeros(a,b){
    let soma = a + b;
    console.log(`A soma de ${a} e de ${b} é igual a ${soma}`)
}
somadeNumeros(2,2)
somadeNumeros(3,1)
somadeNumeros(7,2)

//3- Criar uma função para retornar o dobro de um valor.precisa ter 1 parametro.Uma variavel dentro da da função Usar 'return' dentro da função console.log vai fora da função

function dobrarNumero(n1){
    let dobro = n1 * 2;
    return dobro;
}

let resultado = dobrarNumero(5)
console.log(`O dobro é igual a ${resultado}`);
