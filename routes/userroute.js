const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const controller= require('../controllers/usercontrollers');



router.get('/login', controller.loginpage);

router.get('/signup', controller.signuppage);

router.post('/login', controller.login);

router.post('/signup', controller.signup);



module.exports = router;