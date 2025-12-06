//1- Função para calcular área de um quadradro
//2- Função para calcular área de um retangulo
//3- Função para converter Celsisus em Fahrenheit
//4- Função para formatar preço com duas casas decimais
//com return e console fora da função

function calculoQuadrado(lado){
    return  lado * lado;
}

console.log(`A área do quadrado é : ${calculoQuadrado(5)}`);


function areaRetangulo(base,altura){
    return base * altura
}

console.log(`A área do retangulo é: ${areaRetangulo(3,5)}`);


function conversordeTemperatura(celsius){
    let f = (celsius * 9/5) + 32
    return f
}
console.log(`A temperatura em Fahrenheit de 30°C é ${conversordeTemperatura(30)}°F`)


function formatadorDePreco(preco){
    return preco.toFixed(2)
}

console.log(`O novo preço é: ${formatadorDePreco(12.55365567)}`);