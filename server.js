const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const useragent = require('express-useragent');

const app = express();
const port = process.env.PORT || 9000;

var corsOptions = {
    origin: "*",
};

//**************************************************************************
//*[START] Application Services ********************************************
//*Description:
//*Application is running and which port is listening
//*
//************************************
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Cross origin
app.use(cors(corsOptions));
// Get client device info
app.use(useragent.express());
// adding Helmet to enhance your Rest API's security
app.use(helmet());
// adding morgan to log HTTP requests
app.use(morgan('combined'));

// routes
app.use('/api/user', require('./app/routes/user.routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
//*Not applicable
//*[END] Application Services *************************************************