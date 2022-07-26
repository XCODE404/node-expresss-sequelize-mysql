const { User } = require('../../models');
const { success, error } = require('../utils/responseUtil');

//********************************************************************************************
//*[START] User Controller ******************************************
//*Description:
//*For User Controller
//*
//************************************
// Function Name: func_getAllUser
// Description: 
// Inputs & Arguments (required): 
// Type: 
// Outputs: 
//************************************
// Function Name: func_getUserByUid
// Description: 
// Inputs & Arguments (required): 
// Type: 
// Outputs: 
//************************************
// Function Name: func_createUser
// Description: 
// Inputs & Arguments (required):
// Type: 
// Outputs: 
//************************************
// Function Name: func_updateUser
// Description:
// Inputs & Arguments (required):
// Type: 
// Outputs: 
//************************************
// Function Name: func_deleteUser
// Description: 
// Inputs & Arguments (required): 
// Type: 
// Outputs: 
//************************************
//*Errors Thrown:
//*If there is and error you will get error message with 500 or 404
//*
//************************************
//*Dependencies and libs:
//*[ Models, responseUtil ] 
//************************************
//*Notes:
//*Not applicable

exports.func_getAllUser = async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json(error(err.message, res.statusCode));
    }
}

exports.func_getUserByUid = async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json(error(err.message, res.statusCode));
    }
}

exports.func_createUser = async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json(error(err.message, res.statusCode));
    }
}

exports.func_updateUser = async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json(error(err.message, res.statusCode));
    }
}

exports.func_deleteUser = async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json(error(err.message, res.statusCode));
    }
}

//*[END] User Controller ********************************************
//********************************************************************************************