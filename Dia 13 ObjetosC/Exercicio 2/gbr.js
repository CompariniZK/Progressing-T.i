class CARROS
{
nome
potencia
velocidadeM
aceleracao
 constructor(nome, potencia , velocidadeM, aceleracao, distanciaP){

    this.nome = nome
    this.potencia = potencia
    this.velocidadeM = velocidadeM
    this.aceleracao = aceleracao
    this.distanciaP = distanciaP
    
 }
   distancia()
    {
    let pouco = 0
    let vencedor12 = []
    let tempoSEG = this.distanciaP / (this.velocidadeM / this.aceleracao)
    pouco++
    vencedor12[pouco] = tempoSEG
    
    let sorted = vencedor12.sort((a,b) => { 

    if(a > b) return 1;
    if(a < b) return -1;
    return 0;

    })

    return sorted;

}

 }

let whilezin = true
let contador = 0
let carrao = []
let vencedor10 = 0
let vencedor0 = 0



while(whilezin)
{
let nomes = prompt("Insira o nome do carro:")
let potencias = Number(prompt("Insira o número da potência do carro: "))
let velocidadeMs = Number(prompt("Insira a velocidade máxima desse carro"))
let aceleracaoZK = Number(prompt("Quantos segundos o carro leva para ir de 0 a 100?"))
let distanciaPs = Number(prompt("Insira a distância a percorrer:"))
let carrinho = new CARROS(nomes, potencias, velocidadeMs, aceleracaoZK , distanciaPs)

carrao[contador] = carrinho
carrao.distancia()
contador++

let stopz = Number(prompt("pretende adicionar mais carros? (digite 2) pra não"))

if(stopz === 2){

whilezin = false;

}

}


class CORRIDA
{

nome 
tipo
distancia
participantes
vencedor

constructor(nome,tipo,distancia,participantes,vencedor)
{
this.nome = nome
this.tipo = tipo
this.distancia = distancia
this.participantes = participantes
this.vencedor = vencedor
}
theWinnerIs()
{
console.log("Os vencedores em ordem foram: " + carrao[0].distancia())
return;
}
}

let nomes3 = prompt("Insira o nome do local da corrida:")
let tipos2 = prompt("Insira o tipo da corrida:")
let distancia = Number(prompt("Trajeto total da corrida"))
let participantes = carrao
let vencedores = CARROS.distancia

let corridinhas = new CORRIDA(nomes3, tipos2, distancia, participantes, vencedores)
let corridaCD = [corridinhas]

console.log(carrao)
console.log(corridaCD)
console.log(corridaCD[0].theWinnerIs())





