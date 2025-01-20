const {GoogleSpreadsheet} = require('google-spreadsheet') 
const credenciais = require('./credentials.json')
const arquivo = require('./arquivo.json')
const {JWT} = require('google-auth-library')


const SCOPES = [

    "https://www.googleapis.com/auth/spreadsheets"


];


const jwt = new JWT ({

    email:credenciais.client_email,
    key: credenciais.private_key,
    scopes: SCOPES

}
) 

async function callAPI() {
    
   const doc = new GoogleSpreadsheet(arquivo.id, jwt);
   await doc.loadInfo();
   return doc
}

callAPI();


