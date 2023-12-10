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

    let ID = prompt("Insira o número ID do hotel:")
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


