const express = require("express");
const router = express.Router();
const controller = require('../controllers/blogcontrollers');
const upload =require('./fileupload');



router.get('/', controller.fetchAll);

router.get('/:id', controller.fetchById);

router.post('/', upload.single('file'), controller.insert);

router.delete('/:id', controller.delete);

router.put('/:id', upload.single('file'), controller.update);



module.exports = router;