// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

const Database = require('better-sqlite3');

const db = new Database('./src/db/database.db', {
    verbose: console.log,
  });

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({limit: '25mb'}));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

function getFormatedDate() {
    const today = new Date();
    return today.getDate()  + "/" + (today.getMonth()+1) + "/" + today.getFullYear()
}

// Escribimos los endpoints que queramos
server.get('/doctors/:doctorId/treatments', (req, res) => {
    const doctorId = req.params.doctorId;
    const date = req.query.date ? req.query.date : getFormatedDate();

    // preparamos la query
    const query = db.prepare('SELECT * FROM treatments WHERE doctorId = ? and date = ?');
// ejecutamos la query
    const foundTreatment = query.all(doctorId, date);
    console.log(JSON.stringify(foundTreatment))
  res.json(foundTreatment);
});

