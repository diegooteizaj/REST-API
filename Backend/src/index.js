const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//imports
const procesoRoutes = require('./routes/person-rotes');
app.use(cors());
//settings
app.set('port', 8085);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(procesoRoutes);



//run
app.listen(app.get('port'), () => {
    console.log('Server on Port 8085')
})
