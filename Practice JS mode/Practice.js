let livros = [];

let library = [];

class Livro{

    nome
    autor
    editora
    ano

    constructor(nome, autor, editora, ano){


        this.nome = nome
        this.autor = autor
        this.editora = editora
        this.ano = ano

    }


}


class Biblioteca{


    Nome 
    Endereco
    Telefone
    Acervo

    constructor(Nome,Endereco,Telefone,Acervo){

        this.Nome = Nome
        this.Endereco = Endereco
        this.Telefone = Telefone
        this.Acervo = Acervo

    }

        findBook() {
            
            let nomeDoLivro = prompt("Digite o nome do livro que deseja buscar na biblioteca: ")
            let nomeLivro =  livros.find(livro => livro.nome === nomeDoLivro)

            if(nomeLivro !==  undefined){

            console.log("Livro encontrado, veja as info: ")
            console.log(nomeLivro)
            let emprestimo = parseInt(prompt("Deseja pedir emprestado algum livro? Digite 1 e carregarei você até a ala de empréstimo: "))
                if(emprestimo === 1){

                    this.borrowBook();

                }
                else{

                    console.log("Ok")
                    Desejo();
                }
            }
        }

        borrowBook() {

            let nomeLivro = prompt("Digite o nome do livro para verificar a disponibilidade:")
            let verificaDispo = livros.findIndex(livro => livro.nome === nomeLivro)

            if(verificaDispo !== -1){


                console.log("Empréstimo feito")
                livros.splice(verificaDispo,1)
                Desejo();



            }

            else{

                console.log("Livro não disponível")
                Desejo();
            }


        }

}


function biblioteca(){


    let Nome = prompt("Digite o nome da bibliteca: ")
    let Endereco = prompt("Digite o endereco da biblioteca:")
    let Telefone = Number(prompt("Digite o número da biblioteca:"))
    let AcervoDeLivros = livros;
    let Library = new Biblioteca(Nome, Endereco, Telefone, AcervoDeLivros)

    library.push(Library)
    Desejo();


}





function Livrinho (){

    let nome = prompt("Digite o nome do livro:")
    let autor = prompt("Digite o nome do autor: ")
    let editora = prompt("Digite o nome da editora: ")
    let ano = Number(prompt("Digite o ano do lançamento do livro: "))

    let objetoLivro = new Livro(nome, autor, editora, ano)


    livros.push(objetoLivro)
    Desejo();


}


 

function Desejo(){
 let desejo = Number(prompt("Deseja continuar? Se sim deseja cadastrar um livro digite 1, se deseja cadastrar uma biblioteca(2),se deseja buscar informações e disponibilidade de um livro 3, se quiser quitar, 4."))


 if(desejo === 1){

    Livrinho();

 }

 if(desejo === 2){

    biblioteca();

    }
    

 

 
 if(desejo === 3){

    if(library.length > 0 ){

        let bibliotecaSelecionada = library[0];
        bibliotecaSelecionada.findBook();

    }
    
 }

if(desejo === 4){



    console.log("Ótima semana pra ti meu truta")
}
 

 
}


