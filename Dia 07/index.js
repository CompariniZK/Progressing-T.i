let alunos = prompt("Deseja adicionar um novo aluno no sistema?Sim ou não?")
let numeroAlunos = Number(prompt("Insira a quantidade de alunos"))

while(desejo === "Sim" || "Não"){
    
    let generoAlunos = prompt("Insira o gênero")
    let nomeAlunos = prompt("Insira o nome do aluno")
    let notaAlunos = Number(prompt("Insira a nota do aluno"))
    let desejo = prompt("Deseja adcionar mais alunos?")
    if (desejo === "Não"){
        let mediaGeral = notaAlunos / numeroAlunos
console.log(mediaGeral)

    }


}






