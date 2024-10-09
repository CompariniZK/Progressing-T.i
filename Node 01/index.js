

function calculoRota (distancia, combustivel){

let resultado = 0;
 
if(combustivel == "G"){

        resultado = distancia / 16;
    }
    if(combustivel == "E"){

        resultado = distancia / 11;
    }   
        return resultado;
}

module.exports = calculoRota;