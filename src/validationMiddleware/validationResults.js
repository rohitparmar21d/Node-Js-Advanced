const { validationResult } = require('express-validator');

exports.uservalidationResults = (req,res,next) => {
    const  errors = validationResult(req);
    if(!errors.isEmpty()){
        const alert = errors.array();
        console.log(typeof alert)
        res.render('signuppage', { alert })
    }
    else{
        next();
    }
},

exports.blogvalidationResults =(req,res,next) => {
    const  errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(422).jsonp(errors.array());
    }
    else{
        next();
    }
}