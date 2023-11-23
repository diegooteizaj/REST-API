// configbd.js

// Importa las dependencias necesarias
const mysql = require('mysql');

// Configura los datos de conexión a la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '0123456789',
  database: 'ultrasound'
};

// Crea una función "Open" para abrir la conexión a la base de datos
function Open(sql, values, isSingle) {
  const dbConnection = mysql.createConnection(dbConfig);

  return new Promise((resolve, reject) => {
    dbConnection.connect((err) => {
      if (err) {
        reject(err);
      }

      dbConnection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        }

        dbConnection.end(); // Cierra la conexión después de la consulta

        resolve(isSingle ? results[0] : results);
      });
    });
  });
}

// Exporta la función "Open" para su uso en otros archivos
module.exports.Open = Open;