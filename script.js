//Questão 1 - Somador de Números:
let qtdValores = parseInt(prompt('Escreva quantos valores você deseja somar:'));
let valorSoma = 0;
let resultado = 0;

function somarValores(qtdValores){
for(i = 0; i < qtdValores; i++){
    valorSoma = parseFloat(prompt("Escreva um valor para a soma"));
    resultado = resultado + valorSoma;
}
console.log('O valor da soma de todos os valores é:' + resultado);
}
somarValores(qtdValores);
//Encerramento da questão 1

//Questão 2 - Contagem Regressiva da NASA:

function contagemRegressiva(){

}


setInterval(contagemRegressiva, 1000);

//Encerramento da questão 2

//Questão 3 - Balanço Financeiro Anual:


// Encerramento da questão 3 