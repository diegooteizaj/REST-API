const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//READ
router.get('/getPersona', async (req, res) => {
    sql = "select * from persona";

    try {
        let result = await BD.Open(sql, [], false);
        let Persona = [];

        if (result && result.rows && result.rows.length > 0) {
            result.rows.map(user => {
                let personaSchema = {
                    "id": user[0],
                    "nombre": user[1],
                    "apellidoPaterno": user[2],
                    "apellidoMaterno": user[3],
                    "email": user[4],
                    "telefono": user[5],
                    "cargo": user[6],
                    "rol": user[7],
                }

                Persona.push(personaSchema);
            });

            // Envía la respuesta JSON solo si hay resultados
            res.json(Persona);
        } else {
            // Si no hay resultados, puedes enviar una respuesta vacía o un mensaje apropiado.
            res.json([]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});





module.exports = router;