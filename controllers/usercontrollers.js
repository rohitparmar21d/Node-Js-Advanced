const  user  = require('../models/user');
const bcrypt = require('bcrypt');

exports.loginpage =(req,res) => { res.render('loginpage') }

exports.signuppage = (req,res) => { res.render('signuppage')}

exports.login =async (req,res) => { 
    let userData = await user.findOne({
        where: { email: req.body.email }
    })
    if(userData)
    {
        const validPassword = bcrypt.compareSync(req.body.password ,userData.Password);
        if(validPassword)
        {
            res.status(200).json({ msg : "Logged In successfully"})
        }
        else
        {
            res.status(404).json({ error : "Invalid Password"})
        }
    }
    else
    {
        res.status(404).json({ error : "Invalid Email"})
    }
}

exports.signup =(req,res) => { 
   if(req.body.password != req.body.confirm_password)
   {   const alert= [{ msg : "Password doesn't match" }];
       res.render('signuppage',{ alert})
   }
   else
   {
     const salt = bcrypt.genSaltSync(10);
     const password = bcrypt.hashSync(req.body.password, salt);

     user
       .create({
         Name: req.body.name,
         Email: req.body.email.toLowerCase(),
         Mobile: req.body.mobile,
         Password: password,
       })
       .then(() => {
         res.json({
           msg: "user insert successfully!!!",
         });
       })
       .catch((err) => {
         if (err) {
           res.json({ error: "insertion failed." });
         }
       });
   }
   }

