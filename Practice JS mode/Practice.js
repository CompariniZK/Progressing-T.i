function Calculadora (num1, num2, operador){

    num1 = Number(prompt("digite um primeiro número"))
    num2 = Number(prompt("Digite um segundo número"))
    operador= prompt("Qual operação gostaria de fazer?")

        if(operador === "soma" || "Soma"){

           console.log("O resultado da soma é: ")
           console.log( num1 + num2)
        }

        if(operador === "Subtração" || "subtração"){

            console.log("O resultado da subtração é: ")
            console.log(num1 - num2)
        }

        if(operador === "Divisão" || "divisao"){

            console.log("O resultado dessa divisão é: ")
            console.log(num1 / num2)
        }


        if(operador === "Multiplicação" || "multiplicação"){

            console.log("O resultado dessa multiplicação é: ")
            console.log(num1 * num2)
        }

    
}

let pergunta = prompt()

