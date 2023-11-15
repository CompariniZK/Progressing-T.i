class PC
{

tipo
processador
video
armazenamento
memoriaRam
ssd

constructor(tipo, processador, video, armazenamento, memoriaRam)
{
this.tipo = tipo
this.processador = processador
this.video = video
this.armazenamento = armazenamento
this.memoriaRam = memoriaRam
}
}

let whilezin = true
let contador = 0
let pczin = []

while(whilezin)
{
let tipo = prompt("Insira o tipo do PC:")
let processador = prompt("Insira o nome de seu processador:")
let video = prompt("Integrado ou dedicado seu video?:")
let armazenamento = parseInt(prompt("Insira o número de sua memória de armazenamento:"))
let memoriaRam = Number(prompt("Insira o número de sua memória RAM:"))

let pc = new PC(tipo, processador , video , armazenamento , memoriaRam)


pczin[contador] = pc

contador++


let calmou = parseInt(prompt("Deseja encerrar os cadastros? Digite '1' para sim e '2' para não."))

if(calmou === 1){

whilezin = false;

}

}

console.log("Todos os seus PCS cadastrados estão aqui nos arrays, clique e veja as informações: " + pczin)