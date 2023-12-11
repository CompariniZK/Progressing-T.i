let hoteis = []
let reservas = []

class Hotel {

    ID;
    nome;
    categoria;
    endereço;
    telefone;
    
    constructor(ID, nome, categoria, endereço, telefone){

        this.ID = ID
        this.nome = nome
        this.categoria = categoria
        this.endereço = endereço
        this.telefone = telefone

}
}

function cadastroHotel (ID, nome, categoria, endereco, telefone){

    let hotel = new Hotel(ID, nome, categoria, endereco, telefone)
    hoteis.push(hotel);
}
    
    let whilezin = true

    while(whilezin = true){

    let ID = prompt("Insira o número ID do hotel para cadastro:")
    let nome = prompt("Insisra o nome do hotel:")
    let categoria = parseInt(prompt("Insira a catgoria do hotel de 1 à 5 como máximo."))
    let endereco = prompt("Insira o nome do bairro e estado do hotel:")
    let telefone = parseInt(prompt("Insira o telefone do hotel:"))

    cadastroHotel(ID, nome, categoria, endereco, telefone);

    let desejoParar = parseInt(prompt('Deseja cadastrar mais? Digite(1) para sim ou qualquer outro número para não'))
    if(desejoParar != 1 ){
        whilezin = false;
        break;
    }
    }

    //Pra segunda feira, lembre -se de criar a função cadastroReservas e quebrá-la assim como quebrei a do hotel

class Reservas{

id;
NameHotel;
nomeResponsavel;
diaEntrada;
diaSaida;

constructor(id,idHotel,nomeResponsavel,diaEntrada,diaSaida)
{

    this.id = id
    this.idHotel = idHotel
    this.nomeResponsavel = nomeResponsavel
    this.diaEntrada = diaEntrada
    this.diaSaida = diaSaida



}

}

function cadastroReservas (id, idHotel, nomeResponsavel, diaEntrada, diaSaida)
{

let reservado = new Reservas(id,idHotel,nomeResponsavel, diaEntrada,diaSaida)
reservas.push(reservado);

}
let loopzin = true

let id = 0
let idHotel = 0
let nomeResponsavel = 0
let diaEntrada = 0
let diaSaida = 0

while(loopzin = true)
{
 idDaReserva = parseInt(prompt("Insira o ID da reserva:"))
 nameHotel = prompt("Insira o name do Hotel:")
 nomeResponsavel = prompt("Insira o nome do responsável:")
 diaEntrada = parseInt(prompt("Insira a data da entreada: (ex: 03/02/10"))
 diaSaida = parseInt(prompt("Insira o dia da saída da mesma forma"))

cadastroReservas(idDaReserva, nameHotel, nomeResponsavel, diaEntrada, diaSaida);

let desejo2 = Number(prompt("Deseja criar uma nova reserva? Digite 1 para sim ou 2 pra não"))

if(desejo2 !== 1){

break;


}
}


function demanda(IDHOTEL){


    IDHOTEL = Number(prompt("Insira o nome do hotel reservado"))
    if(IDHOTEL === nameHotel){

    

       console.log(reservas.indexOf(IDHOTEL))

    
    }



}

demanda();