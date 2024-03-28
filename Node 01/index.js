let distancia = parseInt(prompt("Qual a distância do percurso (KM)? "));
let combustivel = prompt("Qual o combustível da máquina? Digite: (G) para Gasolina e (E) para etanol");

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

console.log("A quantidade de litros de combustíveis é de: " + calculoRota(distancia, combustivel) + " litros");