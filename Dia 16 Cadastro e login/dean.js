let contador = 0
let nomeCliente = []
let senhaCliente = []
let coisa = true

demanda();

function demanda(){   
while(coisa = true){
let pedido = parseInt(prompt("Escolha uma das opções: (1)Cadastro; (2) login; (3) exclusão de uma conta (4) Encerrar "))

if(pedido === 1)
{
    cadastro();
}
if(pedido === 2){

    login(nomeCliente, senhaCliente);
}
if(pedido === 3)
{
    exclusao(nomeCliente, senhaCliente);
}

if(pedido === 4){
    
    coisa = false
    break;
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

function exclusao(nomeCliente, senhaCliente){

let nome3 = prompt("Insira o nome da conta que deseja excluir")
let senha3 = parseInt(prompt("Insira a senha da conta que deseja exlcuir"))

nomeCliente.includes(nome3)
senhaCliente.includes(senha3)

if(nomeCliente.includes(nome3) == true && senhaCliente.includes(senha3) == true){

    nomeCliente.splice(nomeCliente.includes(nome3))
    senhaCliente.splice(senhaCliente.includes(senha3))
    
    console.log(nomeCliente)
    console.log(senhaCliente)

}

}
}

 let acabou2 = Number(prompt("Deseja adicionar mais? (1) para SIM; (2) para NÃO"))

if(acabou2 === 1){

demanda();

}
