//Fazer um algoritmo que imprima os numeros multiplos de 5 de 0 a 100 sem função e com função

//sem função

for( let n=0; n<=100; n++){
    if( n % 5 ==0){
        console.log(n)
    }
}

//com função

function imprime (){
    for ( let n=0; n<=100; n++){
        if (n % 5 == 0) {
            console.log(n);
        }
    }
}

imprime ()
 