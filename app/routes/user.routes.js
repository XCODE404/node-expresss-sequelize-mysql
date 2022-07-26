var router = require('express').Router();
const userController = require('../controller/user.controller');

//********************************************************************************************
//*[START] For User.Routes ******************************************

router.get('/', userController.func_getAllUser);

router.get('/:uid', userController.func_getUserByUid);

router.post('/', userController.func_createUser);

router.put('/:uid', userController.func_updateUser);

router.delete('/:uid', userController.func_deleteUser);

module.exports = router;

//*[END] For User.Routes ********************************************
//********************************************************************************************