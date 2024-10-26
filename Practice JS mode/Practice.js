class Computer 

{
    tipo
    processamento
    memoriaRam
    armazenamento

    constructor(tipo, processamento, memoriaRam, armazenamento){

        this.tipo = tipo
        this.processamento = processamento
        this.memoriaRam = memoriaRam
        this.armazenamento = armazenamento



    }


}

let ssd = true;
let contador = 0;
let arrayPC = [];
while(ssd === true){

    let Tipo = prompt("Qual o tipo do seu pc")
    let processador = prompt("Qual o seu processador")
    let Ram = prompt("Qual a memoria Ram do seu pc?")
    let Armazenamento = prompt("Quanto é o seu armazenamento?")
      
    const objetoPC = new Computer(Tipo , processador , Ram , Armazenamento)

        arrayPC[contador] = objetoPC

        let desejo = Number(prompt("Deseja sair? (1) para sim e 2 para nao"))

        if(desejo === 1){

            console.log(arrayPC)
            break;
        }

}