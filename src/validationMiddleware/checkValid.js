const { check } = require('express-validator')

exports.checkUserdata = [ 
    check("name","Invalid name").isEmpty(),
    check("email" , "invalid Email").isEmail().normalizeEmail().isLength({min:3}),
    check("mobile").isLength({ min:10 , max:10}),
    check('password','password Must be 5 char long ').isLength({min:5})],

exports.checkBlogdata = [
    check('title','Invalid title Name').exists().isLength({min :3}),
    check('decription' ," desciption Cant be empty").exists().isLength({ min: 1}),
    check('publisheddate' ,' invalid Published  date').isISO8601().toDate(),
    check('author', 'Invalid author name').isLength({min:5})
]