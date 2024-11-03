
let = salarioAumentado = 0 
let aumentoQtd = 0;

function Empregado(){

let nome = prompt("Qual o seu nome?")
let salario= Number(prompt("Qual o teu salário?"))

CalculoAumento(salario, nome)



}


function CalculoAumento(salario, nome){

    if(salario <= 1500){

    aumentoQtd = salario * (20/100)
    salarioAumentado = salario + aumentoQtd
        
    ShowThen(salario, nome, aumentoQtd, salarioAumentado)


    }

    if(salario <= 2000 && salario > 1500 ){

        aumentoQtd = salario * (15/100)
        salarioAumentado = salario + aumentoQtd
        
        ShowThen(salario, nome, aumentoQtd, salarioAumentado);

    }

    if(salario <= 3000 && salario > 2000){

        aumentoQtd = salario * (10/100)
        salarioAumentado = salario + aumentoQtd
        
        ShowThen(salario, nome, aumentoQtd, salarioAumentado);
    }

    if(salario > 3000 ){

        aumentoQtd = salario * (5/100)
        salarioAumentado = salario + aumentoQtd
       
        ShowThen(salario, nome, aumentoQtd, salarioAumentado);
    }

}

function ShowThen(salario, nome, aumentoQtd, salarioAumentado){

console.log("O salário de " + nome +  " saiu de " + salario + " para " + salarioAumentado + " com um aumento de " + aumentoQtd + " euros!!!")
    let desejo = Number(prompt("Você deseja colocar um novo empregado? 1 para sim e 2 para nao"))
    
    if(desejo === 1){
        Empregado();
    }
}


Empregado()