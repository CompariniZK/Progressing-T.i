function Desejo(){

    let desejo = Number(prompt("O que você deseja fazer? (1) Cadastro, (2) Login, (3) excluir conta ou (4)encerrar programa (Digite o número respectivo)"))
    
    return desejo
}

let arrayNomes = [];
let arraySenhas = [];

function DadosUsuario (){

    let nome = prompt("Digite seu nome")

    arrayNomes.push(nome);


    let senha = prompt("Digite sua senha")

    arraySenhas.push(senha)

}

function Login(nomeLogin,senhaLogin){


    nomeLogin = prompt("Digite seu nome de login:")
    let verificaNome = arrayNomes.filter(function(nome){

        return nome === nomeLogin
    });
    
        if(verificaNome.length > 0){

            senhaLogin = prompt("Digite sua senha de login:")
            let verificaSenha = arraySenhas.filter(function(senha){

                return senha === senhaLogin
            });
                if(verificaSenha.length > 0){

                    console.log("Login efetuado com sucesso!");
                }
                else{

                    console.log("Senha errada")
                }

        }else{

            console.log("Nenhum nome com o " + nomeLogin + " encontrado")
        }


}

    function Exclusao(nome, senha){

        nomeExlusao = prompt("Digite o nome da conta, para exclusão: ")
            let verifica2 = arrayNomes.filter(function(nome){


                return nome === nomeExclusao
            })

                if(verifica2.length > 0){

                    senhaExclusao = prompt("Digite a senha correspondente: ")
                    let verifica3 = arraySenhas.filter(function(senha){

                        senha === senhaExclusao
                        return senhaExclusao
                    })
                        if(verifica3.length > 0){

                        
                            })
                        }
                }

    }