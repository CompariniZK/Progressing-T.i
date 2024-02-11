let arrayNomes = []
let arraySenhas = []
let whilezin = true

while(whilezin = true)
{
let operacao = Number(prompt("O que você deseja fazer? (1) Cadastrar? (2) Fazer login? (3) Excluir cadastro ou encerrar um programa? (4)") )
contador = 0


switch (operacao) 
{
 case 1:

    let names = prompt("Insira um nome:")
    arrayNomes[contador] = names
    
    let senhas = Number(prompt("Insira uma senha, apenas em números"))
    arraySenhas[contador] = senhas
    
    contador++
    break;

 case 2:
    let names2 = prompt("Insira seu nome de usuário")
    let senhas2 = Number(prompt("Insira sua senha de cadastro") )
    
    for(let i = 0; i < arrayNomes.length; i++){
    

    if(names2 == arrayNomes[i] && senhas2 == arraySenhas[i]){
       console.log("Login aceito")
    }
    else{
        console.log("Acesso Negado");
    };


    case 3:
        let names3 = prompt("Insira seu nome de usuário")
        let senhas3 = Number(prompt("Insira sua senha de cadastro") )
        
        for(let y = 0; y < arrayNomes.length; y++)
      if(names3 == arrayNomes[y] && senhas3 == arraySenhas[y]){
      
      }


 case 4:
    whilezin = false
    break;


}
 let pergunta = prompt("Digite 'SIM' para encerrar:")

 if(pergunta === "SIM"){

    break;
 }





}
