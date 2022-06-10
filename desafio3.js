//Fazer um algoritmo que imprima os numeros pares de 0 a 100 sem função e com função

//sem função
//enquanto n = 0 <= 100 o perador aritmético ++ vai adicionando até que o laço seja interrompido pela condição final
// n % 2 ==0 operador que verifica se o resultado da divisão da variável será 0

for( let n=0; n<=100; n++){
    if( n % 2 ==0){
        console.log(n)
    }
}


//com função

function imprime()
    {for( let n=0; n<=100; n++){
    if( n % 2 ==0){
        console.log(n)
    }
    }
}  
 imprime()
 