let pedido = Number(prompt("Insira um primeiro número aleatório"))
let pedido2 = Number(prompt("Insira um segundo número aleatório"))
let operacao = prompt("Qual operação matemática você deseja efetuar a partir desses dois números?")

switch(operacao){
  case "Soma":
    console.log(pedido + pedido2)
    break;
  case "Subtração":
    console.log(pedido - pedido2)
    break;
  case "Divisão":
    console.log(pedido / pedido2)
    break;
  case "Multiplicação":
    console.log(pedido * pedido2)
    break;
}