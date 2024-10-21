let arry = [];
let whilzz = true;
let contador = 0;
let pergunta = Number(prompt("Quantos números deseja preencher o array?"));
let pergunta2 = 0;

while(whilzz === true){

   
    pergunta2 = Number(prompt("Qual o número ?"))

    arry[contador] = pergunta2
    contador++

    if(contador === pergunta){

        console.log(arry)
        break;
    }

}