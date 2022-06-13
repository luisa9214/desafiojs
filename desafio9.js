//Fazer uma funcao que receba um array e retorne os numeros impares desse array sem usar o filter e usando o filter


//sem filter

function impares(arr){
    for(n= 0; n <= arr.length; n++){
        if(arr[n] % 2 == 0){
            console.log(arr[n])
        }
    }
}

impares([1,2,3,4,5,6,8,10,12])

//com filter

function impares (n){
    if (n % 2 != 0){
        return n
    }
}

function imparesFilter(arr){
    let nImpares = arr.filter(impares);
    console.log(nImpares)
}

imparesFilter([1,2,3,4,5,6,7,8,9,10])

