let nomeUsuario = 0;
let idadeUsuario = 0;
let pesoUsuario = 0;
let alturaUsuario = 0;
let profissao = 0;
let contador = 0;
let encerramento = 0;

do{

   nomeUsuario = prompt("Insira seu primeiro nome:")
   idadeUsuario = Number(prompt("Insira sua idade:"))
   pesoUsuario = Number(prompt("Digite seu peso:"))
   alturaUsuario = Number(prompt("Insira sua altura:"))
   profissao = prompt("Insira sua profissão")

console.log("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos e pesa " + pesoUsuario + " KGs, certo? Além disso, você possui " + alturaUsuario + "M e trabalha como " + profissao + ", acertei tudo?" )

if(idadeUsuario >= 18)
{
console.log("Está liberado pra tomar umas geladas hein, já completou maioridade haha.")
}
else{
    console.log("Como você é de menor, sem geladas pra você :(")
}
let anoUsuario = 2023 - idadeUsuario
let mesesUsuario = idadeUsuario * 12
let semanasUsuario = idadeUsuario * 52
let diasUsuario = idadeUsuario * 365

console.log("Então, você já viveu: "
+ mesesUsuario + " meses, " + semanasUsuario + " semanas e " + diasUsuario + " dias.")
console.log("Além disso, você nasceu no ano de " + anoUsuario + "?! ok...")

console.log("Contagem de sua vida abaixo, VALENDO:")
for(contador = 0; contador <= idadeUsuario; contador++){

    console.log(anoUsuario + "-" + contador + " anos de idade")
    anoUsuario++
}


let imc = pesoUsuario / (alturaUsuario * alturaUsuario)

console.log("O seu IMC é de: " + imc)

if(imc <= 18.5)
{
console.log("Atenção! Você está na faixa da magreza, de acordo com seu IMC")
}

if(imc > 18.5 && imc <= 24.9 ){
    console.log("Atenção! Você está na faixa da normalidade, de acordo com seu IMC")
}

if(imc > 24.9 && imc <= 30)
{
console.log("Atenção! Você está na faixa de sobrepeso, de acordo com seu IMC")
}

if(imc > 30)
{
    console.log("Atenção! Você está na faixa da obesidade, de acordo com seu IMC")
}

encerramento = Number(prompt("Deseja encerrar o programa? (1) se deseja encerrar; (2) se deseja adicionar mais informações"))

}

while(encerramento === 2)


