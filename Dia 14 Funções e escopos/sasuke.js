function aldeiaDaFolha (){

let nome = prompt("Insira seu nome:")
let salario = Number(prompt("Insira seu salário"))


    konoha(salario,nome)
}

function konoha (salario, nome)
{
    let aumentoSalarial = 0
    let porcentagem5 = 5 * (salario / 100);
    let porcentagemAumento = 0
if(salario <= 1500){
aumentoSalarial = salario + (porcentagem5 * 4)
 porcentagemAumento = " Você recebeu 20% de aumento no seu salário"
}

if(salario > 1500 && salario <= 2000 )
{
aumentoSalarial = salario + (porcentagem5 * 3)
 porcentagemAumento = " Você recebeu 15% de aumento no seu salário"
}
if(salario > 2000 && salario <= 3000  )
{
aumentoSalarial = salario + (porcentagem5 * 2)
 porcentagemAumento = " Você recebeu 10% de aumento no seu salário"
}
if(salario > 3000 )
{
     porcentagemAumento = " Você recebeu 5% de aumento no seu salário"
aumentoSalarial = salario + porcentagem5

}
console.log("Parabéns " + nome + porcentagemAumento +". Seu salário saiu de: " + salario + " para: " + aumentoSalarial)
parou();
}

function parou (){

let stopzin = Number(prompt("Deseja adicionar um novo empregado corno? (1) sim e (2) para não"))
if(stopzin === 1){

aldeiaDaFolha();

} 
}