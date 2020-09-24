const express = require('express');
const baliCont = require('./controllers/bali');

const app = express();
app.use(express.json());



// END POINTS -----------------------------------------

//Get list of knives
app.get('/api/knives', baliCont.getList);

//Get specific knife
app.get('/api/knife/:id', baliCont.getKnife);



//Start server -----------------------------------
const serverPort = 3001;
app.listen(serverPort,()=>console.log('Server is running on '+serverPort))