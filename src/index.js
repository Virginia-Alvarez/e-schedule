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

server.get('/doctors/:doctorId/treatments/:treatmentId', (req, res) => {
  const doctorId = req.params.doctorId;
  const treatmentId = req.params.treatmentId;

  const query = db.prepare ('SELECT * FROM treatments WHERE doctorId = ? and id =?');

  const detailTreatment = query.all (doctorId, treatmentId);

  res.json (detailTreatment);
});

server.post('/login',(req,res)=>{
  const email = req.body.email;
  const pass = req.body.password;

  const query = db.prepare('SELECT * FROM doctors WHERE email = ? and password = ?');
  const doctorFound = query.all (email,pass);
  if (doctorFound && doctorFound.length) {  
    res.json({
      success: true,
      userId: doctorFound[0].id,
    });
  } else {
    res.json({  
      success: false,
      errorMessage: 'Usuaria/o no encontrada/o',
    });
  }
})

server.post('/sign-up,',(req, res)=>{
  const { email, password } = req.body; 
  const query = db.prepare('INSERT INTO doctors (email, password) VALUES (?, ?)'); //añidimos y guardamos un nuevo registro a la tabla doctors
  const result = query.run(email, password); //ejecutamos la query de la base de datos
  res.json({  
    success: true,
    userId: result.lastInsertRowid, 
  });

})

