const express = require('express');

const app = express();

app.use(express.json()) 


app.get('/players', (resq, resp) => {

    console.log("Get no server")

} )


app.listen(3002, () => {

console.log('inicio servidor da api')

})