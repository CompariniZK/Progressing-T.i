` //Seres inocentes zerados
let somaNotas = 0;
let totalAlunos = 0;
let homens = 0;
let mulheresNotaAcimaDe7 = 0;
let maiorNotaHomens = 0;

while (true) {
  const nota = Number(prompt("Digite a nota do aluno:"));
  const sexo = prompt("Digite o sexo do aluno (M para masculino ou F para feminino):").toUpperCase();

  totalAlunos++;
  somaNotas += nota;

    if (sexo === 'M') {
        //Na guerra o homens foi alterado
      homens++;
      //homens = homens + 1;
      // nota tá valendo 6
      if (nota > maiorNotaHomens) {
        // maior nota homens tá valendo 7
        maiorNotaHomens = nota;
      }
    }

    if (sexo === 'F' && nota > 7) {
      mulheresNotaAcimaDe7++;
    }

    const continuar = prompt("Deseja cadastrar outra nota? (S para sim, N para não):").toUpperCase();
    // != diferente

    //Continuar é igual a continuar = 'S'
    //continuar = 'N'
    if (continuar != 'S') {
      break;
      //Break ele para 
    } 
} 

const mediaGeral = somaNotas / totalAlunos;
console.log();
alert("Média geral dos alunos: " + mediaGeral);
alert("Quantidade de homens: " + homens);
alert("Quantidade de mulheres com nota acima de 7: " + mulheresNotaAcimaDe7);
alert("Maior nota entre os homens: " + (maiorNotaHomens === -1 ? "Nenhuma nota de homem cadastrada" : maiorNotaHomens));
