let nota = 0 
let nome = 0
let sexo = 0
let continueS = 0
let contadorM = 0
let homensNaSala = [];
let contadorF = 0
let mulheresNaSala = [];
let whilez = false;
let maiorNotaHomens = 0;

let question1 = Number(prompt("Você deseja cadastrar uma nota? 1 para sim e 2 para não."))
    if(question1=== 1 ){

        whilez = true;
    }
        
let notasF = 0;
let notasM = 0;

    while(whilez === true){

        nome = prompt("Digite o nome do aluno")
        nota = Number(prompt("Entre com a nota do aluno:"))
        sexo = prompt("Qual o sexo do aluno? M para masculino e F para feminino")
            if(sexo == "M"){

                
                homensNaSala[contadorM] = nota;
                notasM += nota;
                maiorNotaHomens = Math.max(...homensNaSala)
                contadorM++
            }

            else{

                contadorF++
                if(nota > 7)
                mulheresNaSala[contadorF] = nota;
                notasF += nota;
            }
        continueS = parseInt(prompt("Deseja inserir a  nota de um novo aluno? 1 para sim e 2 para nao"))

         if(continueS == 2){

            let quantidadeGeral = contadorM + contadorF
            let somaNotas = notasM + notasF
            let mediaGeral = somaNotas / quantidadeGeral;

            console.log("A média geral foi de " + mediaGeral + ";")
            console.log("A quantidade de homens no boletim foi de: " + contadorM + " homens;")
            console.log("A quantidade de mulheres acima de 7 foram de : " + mulheresNaSala.length)
            console.log("A maior nota dos homens foi: " + maiorNotaHomens)
            
            whilez = false;
}

}