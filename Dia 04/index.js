//declarando geral
let fome = prompt("Você está com fome? Responda sim ou não.")
let dinheiro = prompt("Você está com dinheiro sobrando? Responda sim ou não.")
let restaurante = prompt("Há restaurantes abertos?Responda sim ou não.")

//marcha no procedimento
if(fome === "Não" || dinheiro === "Não" ){
  console.log("Hoje a janta será em  casa") 
}
if(fome === "Sim" && (dinheiro === "Sim" && restaurante === "Não")){
  console.log("Peça um delivery!")
}
if(fome === "Sim" && (dinheiro === "Sim" && restaurante === "Sim")) {
  console.log("Hoje o jantar será no seu restaurante preferido!")
}
//fim do exercicio