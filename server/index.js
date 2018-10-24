const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();
const mc = require ('./controllers/messages_controller');
app.use( bodyParser.json() );
app.use( express.static(__dirname + '/../public/build') );

const messageBaseUrl = "/api/messages"
app.post (messageBaseUrl, mc.create);
app.get (messageBaseUrl, mc.read);
app.put (`${messageBaseUrl}/:id`, mc.update);
app.delete (`${messageBaseUrl}/:id`, mc.delete);


const port = 3001;
app.listen( port, () => {console.log(`Server listening ${port}`); } )
