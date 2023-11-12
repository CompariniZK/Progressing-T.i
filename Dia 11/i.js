let nomesAlunos = []
let notasAlunos = []
let alunos = 0
let notas = 0
let whilezin = true
let contador = 0
let somaNotas = 0
let mediaAlunos = 0

while(whilezin === true) 
{
alunos = prompt('Insira o nome do aluno:')
nomesAlunos[contador] = alunos


notas = Number(prompt('Insira a nota do aluno'))
notasAlunos[contador] = notas

somaNotas += notas

contador++

let stop = Number(prompt("Deseja parar de adicionar notas? Digite 1 para sim; 2 para não. "))

mediaAlunos = somaNotas / contador

if(stop === 1)
{

    whilezin = false;

    
}

}

console.log("Essas são as notas de cada aluno: " + notasAlunos)
console.log("A soma total das notas foram: " + somaNotas)
console.log("A média geral dos alunos foi de:" + mediaAlunos)

