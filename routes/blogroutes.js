const express = require("express");
const router = express.Router();
const controller = require('../controllers/blogcontrollers');
const upload =require('../src/helperMiddleware/fileupload');
const { checkBlogdata  } = require('../src/validationMiddleware/checkValid');
const { blogvalidationResults  } = require('../src/validationMiddleware/validationResults')


router.get('/', controller.fetchAll);

router.get('/:id', controller.fetchById);

router.post('/' ,upload.single('file'), checkBlogdata, blogvalidationResults ,controller.insert);

router.delete('/:id', controller.delete);

router.put('/:id', upload.single('file'), checkBlogdata, blogvalidationResults , controller.update);



module.exports = router;