class TimesS{

    id
    Idade
    Times
    Tamanho

    constructor(id, Idade, Times, Tamanho){

        this.id = id
        this.Idade = Idade
        this.Times = Times
        this.Tamanho = Tamanho

    }

}

const url = 'https://retoolapi.dev/05bdSj/Times'

async function api() {

    try{

        const resposta = await fetch(url)

        if (resposta.status === 200){
    
                const times = await resposta.json();
    
            const object = times.map(
    
                (time) => new TimesS(time.id, time.Idade, time.Times, time.Tamanho)
    
             )
    
             console.log(times)
             return object
        }

    }
   catch(erro){

    console.log("Error meessage", erro.message)


   }
    




}