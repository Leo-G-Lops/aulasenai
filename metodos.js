
let nome = '       Leonardo Lopes       ';
let nomeFormatado = nome.trim().toUpperCase();
console.log(nomeFormatado + ' tem ' + nomeFormatado.replace(/ /g, '').length + ' letras')

let frase = 'TO COM SONO!';
let fraseMinuscula = frase.toLowerCase();
console.log(fraseMinuscula);


let compras = ['pão', 'açucar', 'leite', 'ovos', 'café']
console.log(compras)
compras.push('laranja');
console.log(compras);
compras.shift();
console.log(compras);
let temLeite = compras.includes('chocolate');
console.log(temLeite);
console.log(compras.length);

