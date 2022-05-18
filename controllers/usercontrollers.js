const  user  = require('../models/user');
const bcrypt = require('bcrypt');

exports.loginpage =(req,res) => { res.json({msg : "Welcome to login page"}) }

exports.signuppage = (req,res) => { res.json({msg : 'Welcome to signup page'})}

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
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    user.create({
        Name: req.body.name,
        Email: req.body.email.toLowerCase(),
        Mobile: req.body.mobile,
        Password: password
    }).then(() => {
        res.json({
            msg: "user insert successfully!!!"
        });
    }).catch((err) => {
        if (err) {
            res.json({ error: "insertion failed." });
        }
    });
   }

