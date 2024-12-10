class ToDo{

    Texto
    Prioridade
    Feito


    constructor(Texto, Prioridade, Feito){

        this.Texto = Texto;
        this.Prioridade = Prioridade;
        this.Feito = Feito;



    }

   


}

let objetos = [];

function CriarToDo(){

    let texto = prompt("Digite seu afazer principal da semana")
    let prioridade = Number(prompt("Digite quantas estrelas de prioridade é essa tarefa: "))
    let feito = false;

    let Objetos = new ToDo(texto, prioridade, feito);

    let discover = objetos.find(objeto => objeto.Texto === texto && objeto.Prioridade === prioridade)

if (discover == undefined){

    return objetos.push(Objetos)

}
     



}


function AtualizarToDo();

let textoAntigo = prompt("Digite seu afazer anterior que já fora realizado:")


let discover = objetos.findIndex(objeto => objeto.Texto === textoAntigo)

if(discover !== -1){

    let textoNovo = prompt("Digite seu afazer atual:")

    objetos[discover].Texto = textoNovo

    return true;

}

else{

    return false;

}

function ConcluirToDo(){

    let inverter = prompt("Digite o afazer dentro da lista para inverter o true ou false:")

    let discover = objetos.findIndex(objeto => objeto.Texto === inverter)

        if(discover !== -1){

            objetos[discover].Feito = true;

            return true;


        }
        else{

            return false;
        }

}


function ExcluirToDo(){

    let excluir = prompt("Digite o nome do objeto afazer para excluir da lista: ")
    let discover = objetos.findIndex(objeto => objeto.Texto === excluir)

    if(discover !== -1){

        objetos.splice(discover, 1)

            return true;
    }
    else{

        return false;

    }


} 


function PesquisarToDo (){

    let findToDo = prompt("Pesquise o nome do objeto afazer para verificar seus dados no array: ")
    let discover = objetos.find(objeto => objeto.Texto === findToDo)
    

    if(discover !== undefined){

        console.log("Afazer encontrado");
        console.log(discover);

        return true



    }else{

        return false;
    }


}


function OrdenarToDosCrescente(){

    objetos.sort((a,b) => a.Prioridade - b.Prioridade)
    console.log("Array ordenado de forma crescente: ")
    console.log(objetos)

      return objetos

}


function OrdenarToDosDecrescente(){

    objetos.sort((a,b) => b.Prioridade - a.Prioridade)
    console.log("Array ordenado de forma decrescente: ")
    console.log(objetos)

      return objetos

}
