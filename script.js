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
    alert('Lançamento!');
}
    setInterval(contagemRegressiva, 10000);
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
let n1 = prompt('Escreva um primeiro número:');
let n2 = prompt('Escreva um segundo número:');
let n3 = prompt('Escreva um terceiro número:');
let n4 = prompt('Escreva um quarto número:');


function numerosOrdemDecrescente(n1, n2, n3, n4){
    const numeros = [n1, n2, n3, n4];
    numeros.sort();
    console.log('Esses são os valores em ordem aleatória:')
    console.log(numeros);
    console.log('Agora iremos ver os números em ordem decrescente:')
    numeros.reverse();
    console.log(numeros);
}
numerosOrdemDecrescente(n1, n2, n3, n4);

//Encerramento da questão 4

//Questão 5 - Transformador de Par em Ímpar:
let numeroParOuImpar = parseFloat(prompt('Escreva um valor para transformálo de par para ímpar ou vice-versa:'));
if(numeroParOuImpar % 2 === 0){
    console.log('O seu valor é par! e ele é: ' + numeroParOuImpar);
    console.log('Agora iremos transformá-lo em ímpar...');
    numeroParOuImpar = numeroParOuImpar + 1;
    console.log('O seu novo número ímpar é:' + numeroParOuImpar);
} else{
    console.log("O seu valor é ímpar!");
    console.log('Agora iremos transformá-lo em par...');
    numeroParOuImpar = numeroParOuImpar + 1;
    console.log('O seu novo número par é:' + numeroParOuImpar);
}
//Encerramento da questão 5

//Questão 6 - Vogal ou Consoante:
let vogalOuConsoante = prompt('Escreva uma vogal ou uma consoante')

function verificarVogalOuConsoante(vogalOuConsoante){
if(vogalOuConsoante === 'a' || vogalOuConsoante === 'A' || vogalOuConsoante === 'e' || vogalOuConsoante === 'E' || vogalOuConsoante === 'i' || vogalOuConsoante === 'I' || vogalOuConsoante === 'u' || vogalOuConsoante === 'i'){
    console.log('A sua palavra é uma vogal!');
} else{
    console.log('A sua palavra é uma consoante!');
}
}
verificarVogalOuConsoante(vogalOuConsoante);
//Encerramento da questão 6

//Questão 7 - Cardápio da Picoleteria:
alert('Os sabores da Picoleteria são: Chocolate, Morango, Creme, Manga, Melancia, Vanilla Ice, Céu Azul, Brownie, Hawaiano')
let escolhaSabor = prompt('Escreva o sabor que você deseja comprar em letra minúscula, sem acento e tudo junto:')

function precoPicole(escolhaSabor){
    if(escolhaSabor === 'chocolate'){
        console.log('O picole custou R$1,50');
    } if(escolhaSabor === 'morango' || escolhaSabor === 'Creme'){
        console.log('O picolé custou R$2,50');
    } if(escolhaSabor === 'manga'){
        console.log('O picolé custou R$3,20');
    } if(escolhaSabor === 'melancia'){
        console.log('O picolé custou R$3,40');
    } if(escolhaSabor === 'vanillaace'){
        console.log('O picolé custou R$3,00');
    } if(escolhaSabor === 'ceuazul'){
        console.log('O picolé custou R$3,60');
    } if(escolhaSabor === 'brownie'){
        console.log('O picolé custou R$4,00');
    } if(escolhaSabor === 'Hawaiano'){
        console.log('O picolé custou R$5,00');
    }
}
precoPicole(escolhaSabor);
//Encerramento da questão 7

//Questão 8 - Jogo de Adivinhação  
let numeroAleatorio = Math.floor(Math.random(1) * 2);
var advinhacao = 0;

function jogoAdvinhacao(numeroAleatorio){
    while(advinhacao !== numeroAleatorio){
    numeroAleatorio = Math.floor(Math.random(1) * 100);
    advinhacao = parseFloat(prompt('Escreva um número de 1 a 100 para tentar advinhar um valor sorteado:'));
    alert('Você não conseguiu, tente denovo!');
    }
    alert('Você conseguiu!');
    console.log('O número sorteado era: ' + advinhacao);
}
jogoAdvinhacao(numeroAleatorio);
//Encerramento da questão 8

//Questão 9 - Contador de Vogais
let fraseVogais = prompt('Escreva uma frase para contar as vogais:');
let quantidadeVogais = 0;

function contarVogais(fraseVogais){
    for(let i = 0; i < fraseVogais.length; i++)
    if(fraseVogais[i] == 'a' || fraseVogais[i] == 'A' || fraseVogais[i] == 'e' || fraseVogais[i] == 'E' || fraseVogais[i] == 'i' || fraseVogais[i] == 'I' || fraseVogais[i] == 'o' || fraseVogais[i] == 'O' || fraseVogais[i] == 'u' || fraseVogais[i] == 'U'){
    quantidadeVogais++;
    }
    console.log('O número de vogais presente na sua frase é: ' + quantidadeVogais);
}
contarVogais(fraseVogais);
//Encerramento da questão 9

//Questão 10 -  Validador de Senha  
let senha = prompt('Escreva uma senha com no mínimo 8 caracteres, contendo pelo menos uma letra maíuscula, uma letra minúscula e um número:')

function validarSenha(senha){
    for (let i = 0; i < senha.length; i++){
        if (senha[i] >= 'A' && senha[i] <= 'Z' && senha[i] >= 8 && senha[i] >= 'a' && senha[i] <= 'z' && senha[i] ) {
            console.log('Sua senha está válida!');
          } else{
            console.log('Sua senha está inválida!');
          }
    }
}
validarSenha(senha);
//Encerramento da questão 10