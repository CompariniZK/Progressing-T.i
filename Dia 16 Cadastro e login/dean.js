demanda();

function demanda(){

let pedido = parseInt(prompt("Escolha uma das opções: (1)Cadastro; (2) login; (3) exclusão de uma conta (4) Encerrar "))

if(pedido === 1)
{
    cadastro();
}
if(pedido === 2){

    login(nome2, senha2);
}
if(pedido === 3)
{
    exclusao();
}



}

function cadastro(){

let contador = 0
let nomeCliente = []
let senhaCliente = []

let nome = prompt("Digite seu nome:")
let senha = Number(prompt("Digite sua senha em números"))

nomeCliente[contador] = nome
senhaCliente[contador] = senha

contador++

}

function login(nome2, senha2){
let loginzao = true

while(loginzao = true){
 nome2 = prompt("Insira seu nome de login")
 senha2 = Number(prompt("Digite sua senha"))
 
 nomeCliente.includes(nome2)
 senhaCliente.includes(senha2)

 if(nomeCliente.includes(nome2) === true && senhaCliente.includes(senha2) === false)
 {

console.log("login Successful")
loginzao = false
break

}
}
}

function exclusao (nome3){

nome3 = prompt("Insira o nome da conta que deseja excluir")
let senha3 = parseInt(prompt("Insira a senha da conta que deseja exlcuir"))

nomeCliente.includes(nome3)
senhaCliente.includes(senha3)

if(nomeCliente.includes(nome3) === true && senhaCliente === true){

nomeCliente.splice(nomeCliente.includes(nome3))
senhaCliente.splice(senhaCliente.includes(senha3))


}


}

let acabou = Number(prompt("Deseja adicionar mais? (1) para SIM; (2) para NÃO"))

if(acabou === 1){

demanda();

}