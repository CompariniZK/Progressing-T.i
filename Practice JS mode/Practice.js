class Alunos{

    nome 
    idade
    nota

    constructor(nome, idade, nota){

        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
    }
    


}

let newAluno = [];
let arrayNotas = [];
let arrayIdade = [];
let arrayNome = [];

let somaNotas = 0;

function NovoAluno (nomeAluno, idadeAluno, notaAluno){

    nomeAluno = prompt("Qual o nome do aluno?")
        arrayNome.push(nomeAluno);
    idadeAluno = prompt("Qual a idade do aluno?")
        arrayIdade.push(idadeAluno);
    notaAluno = parseInt(prompt("Qual a nota do aluno?"))
        arrayNotas.push(notaAluno);

    newAluno.push(new Alunos(nomeAluno, idadeAluno, notaAluno))

    let desejo = Number(prompt("Deseja cadastrar mais algum aluno? 1 para sim e 2 para nao"))

    if(desejo === 1 ){

        NovoAluno();
    }
    else{
        console.log("Foram cadastrados " + newAluno.length + " aluno(s)");
        console.log("A média dos alunos foram de: " + CalculoMédias());

        console.log("Separação por idades:")
            OrdenarPorIdade()
        console.log("Separação por nomes:")
            OrdenarPorNome();
        console.log("Separação por notas:")
            OrdenarPorNota();
        console.log("Relatório geral dos alunos:")
        return console.log(newAluno )
    }

}

let medias = 0;

function CalculoMédias(medias){

   somaNotas = arrayNotas.reduce((soma, num) => soma + num, 0)

    return medias = somaNotas / arrayNotas.length
}



function OrdenarPorNota () {

    return console.log( arrayNotas)


}

function OrdenarPorNome () {

    return console.log( arrayNome)


}

function OrdenarPorIdade () {

    
    return console.log( arrayIdade)


}

NovoAluno();