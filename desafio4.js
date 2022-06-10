//Fazer um algoritmo que imprima os numeros impares de 0 a 100 sem função e com função
// n % 2 !=0 operador que verifica se haverá sobra na divisão

//sem função

for ( let n=0; n<=100; n++){
    if (n % 2 != 0) {
        console.log(n);
    }
}

//com função

function imprime (){
    for ( let n=0; n<=100; n++){
        if (n % 2 != 0) {
            console.log(n);
        }
    }
}

imprime()