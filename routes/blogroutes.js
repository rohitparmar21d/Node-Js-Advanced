const express = require("express");
const router = express.Router();
const controller = require('../controllers/blogcontrollers');



router.get('/', controller.fetchAll);

router.get('/:id', controller.fetchById);

router.post('/', controller.insert);

router.delete('/:id', controller.delete);

router.put('/:id', controller.update);



module.exports = router;