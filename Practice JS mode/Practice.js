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