let jutsu = [7,8,2,34,41,48,56,39,10,40]
let teDeioCha = [54,32,40,11,17,21,56,2,24,7]

function koite (jutsu, teDeioCha){

let pain = []
let contador3 = 0


for(let contador = 0; contador <= jutsu.length; contador++ ){


    for(let contador2 = 0; contador < teDeioCha.length; contador2++){


        if(jutsu[contador] === teDeioCha[contador2])
        {
         
            pain[contador3] === jutsu[contador]
            contador3++



        }
       }
      }
      return pain;
}
koite(jutsu, teDeioCha);

