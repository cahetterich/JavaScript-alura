// 1 - Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = []; 
console.log(listaGenerica);

// 2 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']; 
console.log(linguagensDeProgramacao);

// 3 - Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push('Java', 'Ruby','GoLang'); // ou unshift(para add no começo do array)
console.log(linguagensDeProgramacao);

// 4 - Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomes1 = ['José', 'Maria', 'Paulo'];
console.log(nomes1[0]); //Jospe

// 5 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

console.log(nomes1[1]); //Maria

// 6 - Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

console.log(nomes1[2]); //Paulo