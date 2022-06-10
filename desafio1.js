//Fazer um algoritmo que imprima os numeros de 0 a 100 sem função e com função

//sem função
//utilizei o for para executar a condição inicial 0 até que a condição final 100 interrompa o laço. 

for (let n = 0; n < 100; n++) {
    console.log(n);
}

//com função 
//utilizei o for do código anterior e adicioei a função imprimeN. O operador aritmético ++ vai se repetindo até que a condição final interrompa o laço

function imprime(){
    for(let n=0; n<=100; n++){
        console.log(n);
    }
}

imprime()

