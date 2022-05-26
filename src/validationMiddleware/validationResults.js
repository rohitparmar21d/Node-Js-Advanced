const { validationResult } = require('express-validator');

exports.uservalidationResults = (req,res,next) => {
    const  errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(422).jsonp(errors.array());
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