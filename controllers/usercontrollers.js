const  user  = require('../models/user');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

exports.loginpage =(req,res) => { res.render('loginpage') }

exports.signuppage = (req,res) => { res.render('signuppage')}

exports.login = async (req, res) => {
  let userData = await user.findOne({
    where: { email: req.body.email },
  });
  // check user existance
  if (!userData) return res.status(404).json({ error: "Invalid credentials" });

  // varify password
  const validPassword = bcrypt.compareSync(
    req.body.password,
    userData.Password
  );
  if (!validPassword) return res.status(404).json({ error: "Invalid credentials" });
  // JWT generation
  const userId = {id : userData.id}
  const token = sign(userId, process.env.SECRET_KEY);
  res.status(200).cookie("jwtoken", token, { httpOnly: true, expires: new Date(Date.now() + (30*60*1000)) });
  res.status(200).json({ msg: "Logged In successfully"});
};

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

