let nomeUser = prompt("Insira seu nome, pfv")
let idadeUser = Number(prompt("Insira sua idade please(somente números)"))
let salarioUser = Number(prompt("Insira seu salário atual(somente números)"))

console.log("Seu nome é: " + nomeUser)
console.log("Sua idade: " + idadeUser + " anos")
console.log("Seu salário atual é: " + salarioUser + " líquido")


let porcentagem = salarioUser / 1.5
let primeiroAno = salarioUser + porcentagem
let contador = 2023
let porcentagemPlus = 0
let contador2 = 0
let confirma = 0

confirma = Number(prompt("Você confirma todas as informações inceridas? (1) SIM; (2) NÃO"))

while(confirma === 2)
{
    console.log("Então, você terá que reeinserir todas as informações")

     nomeUser = prompt("Insira seu nome, pfv")
     idadeUser = Number(prompt("Insira sua idade please(somente números)"))
     salarioUser = Number(prompt("Insira seu salário atual(somente números)"))

    console.log(nomeUser)
    console.log(idadeUser)
    console.log(salarioUser)

    confirma = Number(prompt("Você confirma todas as informações inceridas? (1) SIM; (2) NÃO"))

    if(confirma === 1){
        for(contador = 2023; contador <= 10; contador++){

            
            console.log(salarioUser + porcentagem + " - " + contador )
            
            
            if(contador > 2023){
            porcentagemPlus = porcentagem * 2
            porcentagem += porcentagemPlus
            
            console.log(salarioUser + porcentagem + "-" + contador )
            
            }
            }
    }
}

