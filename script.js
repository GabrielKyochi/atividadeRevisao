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
let ganhoBruto = 0;
let gastoMensal = 0;
let ganhoTotal = 0;
let gastoTotal = 0;

for(i = 0; i < 12; i++){
    ganhoBruto = parseFloat(prompt('Escreva o valor bruto do mês ' + (i+1)));
    ganhoTotal = ganhoTotal + ganhoBruto;
    gastoMensal = parseFloat(prompt('Escreva o gasto do mês ' + (i+1)));
    gastoTotal = gastoTotal + gastoMensal;
}
let saldoFinal = (ganhoTotal - gastoTotal);
if(saldoFinal < 0){
    console.log('A empresa teve prezuízo durante o período desse ano.');
} else{
    console.log('A empresa teve lucro durante o período desse ano.');
}
//Encerramento da questão 3 

//Questão 4 - Números em Ordem Decrescente:
let 



//Encerramento da questão 4

//Questão 5 - Transformador de Par em Ímpar:

//Encerramento da questão 5