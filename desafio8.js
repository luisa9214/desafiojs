//Fazer uma funcao que receba um array e retorne os numeros pares desse array sem usar o filter e usando filter


//sem filter

function pares(arr){
    for(n= 0; n <= arr.length; n++){
        if(arr[n] % 2 == 0){
            console.log(arr[n])
        }
    }
}

pares([1,2,3,4,5,6,8,10,12])

//com filter

function pares (n){
    if (n % 2 == 0){
        return n
    }
}

function paresFilter(arr){
    let nPares = arr.filter(pares);
    console.log(nPares)
}

paresFilter([1,2,3,4,5,6,7,8,9,10])

