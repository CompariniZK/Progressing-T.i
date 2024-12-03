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

let livros = [];

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
 let desejo = Number(prompt("Deseja continuar? Se sim digite 1"))


 if(desejo === 1){

    Livrinho();

 }
 else{

    console.log("Fechou entao monstro")

 }
}

