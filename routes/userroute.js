const router = require("express").Router();
const controller= require('../controllers/usercontrollers');
const { checkUserdata  } = require('../src/validationMiddleware/checkValid');
const { uservalidationResults  } = require('../src/validationMiddleware/validationResults')

router.get('/login',controller.loginpage);

router.get('/signup', controller.signuppage);

router.post('/login', controller.login);

router.post('/signup', checkUserdata , uservalidationResults , controller.signup);



module.exports = router;