//variável global

let pedido = prompt("Qual serviço você busca? Abastecimento ou calibragem?")    

//marcha na boneca                         
switch(pedido){
  case "Abastecimento":
    //váriaveis
    let tipoGasosa = prompt("Gasolina comum ou etanol?")
    console.log("Ok, " + tipoGasosa + ". Pedido encaminhado.")
    let valorAbastecimento = Number(prompt("Qual o valor de abastecimento?"))
    let valorLitrosGS = valorAbastecimento / 5
    let valorLitrosAC = valorAbastecimento / 3
    //procedimento
    if(tipoGasosa === "Gasolina")
    {
  console.log("Você abasteceu " + valorLitrosGS + " litros")
    }
    else{
 console.log("Você abasteceu " + valorLitrosAC + " litros")
    }
    break;
    
  case "Calibragem":
    console.log("Pneus calibrados com sucesso.")
    
    
}