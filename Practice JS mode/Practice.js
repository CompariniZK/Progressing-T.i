class Hotel{


id
nome
categoria
endereço
telefone

constructor(id, nome, categoria, endereço, telefone){

    this.id = id
    this.nome = nome
    this.categoria = categoria
    this.endereço = endereço
    this.telefone = telefone
    


}




}

let arrayHotel = [];


class Reserva {

    idReserva
    idHotel
    nomeResponsavel
    diaEntrada
    diaSaida

    constructor(idReserva,idHotel,nomeResponsavel,diaEntrada,diaSaida){

    this.idReserva = idReserva
    this.idHotel = idHotel
    this.nomeResponsavel = nomeResponsavel
    this.diaEntrada = diaEntrada
    this.diaSaida = diaSaida

    }




}

let Hoteis = [];

function CadastroHoteis (){

     let hotelNome = prompt("Digite o nome do hotel: ");
     let hotelId = Number(prompt("Digite o número de id do hotel: "));
     let hotelEndereco = prompt("Digite o endereço do hotel: ")
     let hotelCategoria = prompt("Digite a categoria do hotel: ");
     hotelTelefone = Number(prompt("Digite o telefone do hotel"));

     let NovoHoteis = new Hotel(hotelId, hotelNome, hotelCategoria, hotelEndereco , hotelTelefone)
     Hoteis.push(NovoHoteis)
    desejoCliente();
}


let reservas = [];

function CadastroReservas(){

    let idReserva = Number(prompt("Digite o id da reserva: "));
    let idHotel = Number(prompt("Digite o número de id do hotel: "));
    let nomeResponsavel = prompt("Digite o nome do reponsável da reserva: ")
    let diaEntrada = prompt("Digite a data da entrada do hotel ");
    let diaSaida = prompt("Digite a data da saida do hotel");

    let newReserva = new Reserva(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida);

    reservas.push(newReserva)

    desejoCliente();

}



function verHotel (iDhotel){

    iDhotel = Number(prompt("Digite o id do hotel para verificar as reservas contidas nele: "))
    let indiceNomeHotel = Hoteis.find(hotel => hotel.id === iDhotel);
    
    let reservasPlusId = reservas.filter(reserva => reserva.idHotel === iDhotel)

    reservasPlusId.forEach((reserva, index) => {

    console.log("Reserva" + (index + 1))
    console.log(indiceNomeHotel.nome);
    console.log(reserva.nomeResponsavel);
    console.log(reserva.diaEntrada);
    console.log(reserva.diaSaida);


    })
   
    desejoCliente()



}

function verReservas(iDReserva){

    iDReserva = Number(prompt("Digite o número ID da reserva: "))
    let EncontrarReserva = reservas.find(reserva => reserva.idReserva === iDReserva)
    let idhotel = EncontrarReserva.idHotel;
    let EncontrarHotel = Hoteis.find(hotel => hotel.id === idhotel)

    let nomeHotel = EncontrarHotel.nome;

    console.log("Id Reserva: " + iDReserva)
    console.log("Nome do hotel: " + nomeHotel)
    console.log("Dia de entrada: " + EncontrarReserva.diaEntrada)
    console.log("Dia de saída: " + EncontrarReserva.diaEntrada)

}
    
function desejoCliente(){

let desejoCliente = Number(prompt("O que deseja fazer? 1 para Cadastrar hotel; 2 para cadastro de reservas, 3 para mostrar os cadastros de hotel e 4 para verificar as reservas e 5 para break"));

if(desejoCliente === 1){

    CadastroHoteis();
   
}

if(desejoCliente === 2){

  CadastroReservas();

}

if(desejoCliente === 3){

    verHotel();
}

if(desejoCliente === 4){

    verReservas();
}

if(desejoCliente === 5){

console.log("Parabéns, corno")

}
    }

desejoCliente();