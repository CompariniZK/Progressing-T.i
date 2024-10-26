let arrayNomes = [];
let arraySenhas = [];
let whilezin = true;
let contador = 0;
let nome = 0;
let senha = 0;

while(whilezin === true){

    let pergunta = Number(prompt("O que deseja fazer? 1 para cadastro, 2 para login e 3 para excluir cadastro"))

    switch(pergunta){


        case 1 :
             nome = prompt("Digite seu nome:")
            arrayNomes[contador] = nome

             senha = prompt("Digite sua senha")
            arraySenhas[contador] = senha

            contador++
            break;

        case 2:

             nome = prompt("Digite seu nome:")
             senha = prompt("Digite sua senha")

             for(let i = 0; i < arrayNomes.length; i++){

                if(nome === arrayNomes[i] && senha === arraySenhas[i]){

                    console.log("Logado mlk!")
                    break;
                } else{

                    console.log("Acesso negado")
                }
             }

             case 3:
                
                nome = prompt("Digite o nome:")
                senha = prompt("Digite a senha")

                let indexNomes = arrayNomes.indexOf(nome)
                let indexSenhas = arraySenhas.indexOf(senha)

            
            if(indexNomes > -1 && indexSenhas > -1){

                arrayNomes.splice(indexNomes, 1);
                arraySenhas.splice(indexSenhas, 1);
                console.log('Excluída com sucesso')

            }
            
        


    }


    let desejo = Number(prompt("Deseja fazer alguma outra ação? 1 para sim e 2 para não"))

        if(desejo === 2){

            break;
        }



}


