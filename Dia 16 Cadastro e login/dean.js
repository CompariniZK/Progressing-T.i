let contador = 0
let nomeCliente = []
let senhaCliente = []
demanda();

function demanda(){
let coisa = true   
while(coisa = true){
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
    exclusao(nome3);
}



}



function cadastro(){

let coisa2 = true

while(coisa2 = true){

let nome = prompt("Digite seu nome:")
let senha = Number(prompt("Digite sua senha em números"))

nomeCliente[contador] = nome
senhaCliente[contador] = senha

contador++
let acabou = Number(prompt("Deseja adicionar mais algum cadastro? (1) para SIM; (2) para NÃO"))
if(acabou === 2 ){
    coisa2 = false;
let sera = Number(prompt("Deseja fazer login? (1) para sim; (2) para não"))

if(sera === 1){

    login(nomeCliente, senhaCliente);
   
}
    if(sera === 2){
 
        demanda();
                    }
         


          }          
}


}


function login(nomeCliente, senhaCliente){
let loginzao = true


while(loginzao = true){
 let nome2 = prompt("Insira seu nome de login")
 let senha2 = Number(prompt("Digite sua senha"))
 
 nomeCliente.includes(nome2);
 senhaCliente.includes(senha2);

 if(nomeCliente.includes(nome2) == true && senhaCliente.includes(senha2) == true )
 {

console.log("login Successful")
loginzao = false
break

}
}
}

function exclusao(nome3){

nome3 = prompt("Insira o nome da conta que deseja excluir")
let senha3 = parseInt(prompt("Insira a senha da conta que deseja exlcuir"))

nomeCliente.includes(nome3)
senhaCliente.includes(senha3)

if(nomeCliente.includes(nome3) === true && senhaCliente === true){

nomeCliente.splice(nomeCliente.includes(nome3))
senhaCliente.splice(senhaCliente.includes(senha3))


}


}
}

 let acabou2 = Number(prompt("Deseja adicionar mais? (1) para SIM; (2) para NÃO"))

if(acabou2 === 1){

demanda();

}