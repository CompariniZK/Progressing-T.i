let arrayA = [13, 20 , 22, 10, 24 ,20, 27, 17, 19, 14 ];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

function chekin (arrayA, arrayB){

    let arrayComum = [];

    arrayComum = arrayA.filter(comum => arrayB.includes(comum));

    return  console.log("Os números em comuns dos arrays A e B são: "+ arrayComum)
}