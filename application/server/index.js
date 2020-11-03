const express = require('express');
const baliCont = require('./controllers/bali');
const path = require('path');

const app = express();
app.use(express.json());



// END POINTS -----------------------------------------

//Get list of knives
app.get('/api/knives', baliCont.getList);

//Get specific knife
app.get('/api/knife/:id', baliCont.getKnife);

//Add a knife
app.post('/api/knife/add', baliCont.addKnife);

//Update a knife
app.put('/api/knife/update/:id', baliCont.editKnife)

//Delete a knife
app.delete('/api/knife/delete/:id', baliCont.deleteKnife)

//Send react app
app.use(express.static(__dirname + '/../build'));
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'../build/index.html'));
});


//Start server -----------------------------------
const serverPort = 3001;
app.listen(serverPort,()=>console.log('Server is running on '+serverPort))