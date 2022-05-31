const router = require("express").Router();
const controller = require('../controllers/blogcontrollers');
const upload =require('../src/helperMiddleware/fileupload');
const { checkBlogdata  } = require('../src/validationMiddleware/checkValid');
const { blogvalidationResults  } = require('../src/validationMiddleware/validationResults');
const { verifyToken } = require('../src/authentication/varifytoken');


router.get('/', verifyToken ,controller.fetchAll);

router.get('/:id', verifyToken ,controller.fetchById);

router.post('/' ,verifyToken,upload.single('file'), checkBlogdata, blogvalidationResults ,controller.insert);

router.delete('/:id',verifyToken, controller.delete);

router.put('/:id', verifyToken, upload.single('file'), checkBlogdata, blogvalidationResults , controller.update);



module.exports = router;