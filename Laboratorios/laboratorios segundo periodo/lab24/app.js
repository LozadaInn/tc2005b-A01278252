const express = require('express');
const bodyParser = require('body-parser');
const messageController = require('./controllers/messageController');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Añadir esta línea para procesar JSON
app.use(express.static('public'));

app.get('/', messageController.getMessages);
app.post('/add-message', messageController.addMessage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// This code sets up an Express.js application that serves a simple message board.
// It uses a message controller to handle requests for retrieving messages and adding new messages.
// The application uses EJS as the templating engine and serves static files from the 'public' directory.
// This code sets up an Express.js application that serves a simple message board.
// and handles adding new messages via POST requests.
