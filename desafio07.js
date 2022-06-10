//Fazer um funcao que recebe 2 parametros numericos e imprima os valores entre esses numeros

const inicio = 10;
const fim = 35;

imprimeIntervalo(inicio, fim);

function imprimeIntervalo(inicio, fim){
    for(let n=inicio+1; n<fim; n++){
        console.log(n)
    }
}