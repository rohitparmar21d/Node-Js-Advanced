const dotenv = require('dotenv');
dotenv.config();
const { verify } = require("jsonwebtoken");
const user = require('../../models/user');

exports.verifyToken = async (req,res,next) => {

    const token = req.cookies.jwtoken;
    if(!token) return res.status(401).json({ msg : "Access Denied"}) ;

    try {
        const verified = verify(token , process.env.SECRET_KEY);
        const userData = await user.findOne({
            where: {
                id: verified.id
            }
        });
        req.user=userData;
        next();
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}