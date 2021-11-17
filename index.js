// function main(params) {

//     returnString = '';
//     methodPag = params.payment;

//     switch (methodPag) {
//         case 'vista' || 'a vista':
//             returnString = "sua proposta a vista e XXXX";
//             break;
//         case 'parcelado':
//             returnString = "Sua proposta parcelada e YYYY";
//             break;
//         default:
//             returnString = "Ocorreu um erro";
//     }

//     return { message: returnString };
// }

const express = require('express')

const app = express();


app.get('/', (req, res) => {
    res.send('Hello guys')
})

app.listen(() => {
    console.log('Running on port 8080')
})