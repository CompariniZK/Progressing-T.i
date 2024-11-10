function Desejo(){

    let desejo = Number(prompt("O que você deseja fazer? (1) Cadastro, (2) Login, (3) excluir conta ou (4)encerrar programa (Digite o número respectivo)"))
        if(desejo === 1){

            DadosUsuario();
        }
        if(desejo === 2 ){

            Login();
        }
        if(desejo === 3){

            Exclusao();
        }
        else{

            console.log("Tenha uma ótima tarde")
        }
    return desejo
}

let arrayNomes = [];
let arraySenhas = [];

function DadosUsuario (){

    let nome = prompt("Digite seu nome")

    arrayNomes.push(nome);


    let senha = prompt("Digite sua senha")

    arraySenhas.push(senha)

    Desejo();

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

        Desejo();

}

    function Exclusao(nome, senha){

        nome = prompt("Digite o nome da conta, para exclusão: ")
        let verifica2 = arrayNomes.indexOf(nome)

            if(verifica2 !== -1){

                senha = prompt("Digite a senha da conta a excluir:")
                
                
                if(arraySenhas[verifica2] === senha){

                    arrayNomes.splice(verifica2, 1)
                    arraySenhas.splice(verifica2, 1)

                    console.log(arrayNomes)
                    console.log(arraySenhas)
                }
            }

            Desejo();
                }

                
