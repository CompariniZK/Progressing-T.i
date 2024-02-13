let nome = prompt("Insira seu nome: ");
let idade = parseInt(prompt("Insira sua idade: "))
let profissão = prompt("Insira sua profissão: ")
let idadeEmDias =  idade * 365;
let idadeEmMeses = idade * 12;
let idadeEmSemanas = idade * 52

if(idade >= 18){

    console.log("Olá " + nome + ", " + "sua profissão é " + profissão + " e você tem " + idade + " anos e já pode tomar umas geladas haha!" );

}else{


    console.log("Olá " + nome + ", " + "sua profissão é " + profissão + " e você tem " + idade + " anos, de menor hein!");

}

console.log("Você nasceu há " + idade + " anos" + ", " + idadeEmMeses + " meses, " + idadeEmSemanas + " semanas e " + idadeEmDias + " dias.")

let peso = Number(prompt("Digite o seu peso exato, apenas números:"));
let altura = Number(prompt("Digite sua altura exata, apenas números:"));
let imc = peso / (altura * altura);

console.log("De acordo com os dados rescebidos, o seu IMC é de: " + imc);

if(imc < 18.5){

console.log("De acordo com seu imc, você está na faixa da magreza.")
}

if(imc >= 18.5 && imc < 24.9){

    console.log("De acordo com seu imc, você está na faixa normal de peso.")

}

if(imc >= 24.9 && imc < 30){

    console.log("De acordo com seu imc, você está na faixa de sobrepeso.")

}

if(imc >= 30 ){

    console.log("De acordo com seu imc, você está na faixa da obesidade.")

}

let anoDeNascimento = 2024 - idade;

console.log("Descobri que o ano de seu nascimento foi em: " + anoDeNascimento + ", correto?")

let contador = 0;

for(anoDeNascimento; anoDeNascimento <= 2024; anoDeNascimento++){


console.log(anoDeNascimento + " = " + contador + " anos.")
contador++
}