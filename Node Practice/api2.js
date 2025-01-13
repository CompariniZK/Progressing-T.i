
class Empresas{

    Empresas
    Salario

    constructor(Empresas, Salario){


        this.Empresas = Empresas;
        this.Salario = Salario;



    }


}





const url = 'https://retoolapi.dev/YFJ01w/_salario_empresas'

async function chamarAPI() {

    const resposta = await fetch(url)
    if(resposta.status === 200 ){

        const empresas = resposta.data(

            (empresa) => new Empresas(empresa.Empresas, empresa.Salario)


        ) 

        console.log(empresas)



    }
    
}