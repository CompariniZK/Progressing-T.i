class Carros{

    
    Nome 
    Potencia
    VelocidadeM
    Aceleracao

        constructor(Nome, Potencia, VelocidadeM, Aceleracao){


            this.Nome = Nome
            this.Potencia = Potencia
            this.VelocidadeM = VelocidadeM
            this.Aceleracao = Aceleracao

}


    
        vitesse (distancia){

   
            resultado = distancia/(this.velocidadeM / this.Aceleracao)
           

           

        } 
    

}


function CalculoMenorTempo(arrayCarro, distancia){

    let carroMenorTempo = arrayCarro[0];
    let calculoMenorTempo = carroMenorTempo.vitesse(distancia);

    for(let i = 1; i < arrayCarro.length; i++ ){

        let TempoAtual = arrayCarro[i].vitesse(distancia)
        if(TempoAtual < calculoMenorTempo){

            calculoMenorTempo = TempoAtual
            carroMenorTempo = arrayCarro[i];
        }


    }
        return carroMenorTempo;


}

let carro = 0;
let arrayCarro = []
let contador = 0
let whilezin = true;

    while(whilezin === true)
    
    {

        let nome = prompt("Insira o nome do carro:")
        let potencia = prompt("Insira a potencia:")
        let vm = Number(prompt("Insira a velocidade máxima: em kms"))
        let aceleracao = Number(prompt("Insira a aceleracao por segundo em Kms"))

        carro = new Carros(nome, potencia, vm , aceleracao)
        
        arrayCarro[contador] = carro
        contador++

        let saida = Number(prompt("Deseja cadastrar um novo carro? 1 para sim e 2 para nao"))
        if(saida === 2) {

            console.log(arrayCarro)
            break;

        }
    }


class Corrida{

    NomeCorrida
    Tipo
    Distancia
    Participantes
    Vencedor 



            constructor(NomeCorrida, Tipo, Distancia, Participantes, Vencedor){

                this.NomeCorrida = NomeCorrida
                this.Tipo = Tipo
                this.Distancia = Distancia  
                this.Participantes = Participantes
                this.Vencedor = Vencedor
        }
}

let corrida = 0;
let whilezin2 = true;
let arrayCorrida = [];
let contador2 = 0;

while(whilezin2 === true)

{
    let nomeCorrida = prompt("Qual o  nome da corrida?")

    let tipoCorrida = prompt("Qual o tipo da corrida? ")
    let distancia = Number(prompt("Qual a distancia em KMs?"))
        let participantes = arrayCarro.length
            console.log("Participaram " + participantes + " carros")
                let vencedor = CalculoMenorTempo(arrayCarro, distancia)
                    console.log("O vencedor foi o carro com " + vencedor )

    corrida = new Corrida(nomeCorrida, tipoCorrida, distancia, participantes, vencedor)
    arrayCorrida[contador2] = corrida
    contador2++

    let desejo2 = Number(prompt("Deseja cadastrar uma nova corrida? 1 para sim e 2 para nao"))

    if(desejo2 === 2){


        console.log(arrayCorrida)
        break;
    }

}


