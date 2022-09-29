const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
        const { mail, username, password } = req.body;
        let existingUser = await User.findOne({ mail: mail.toLowerCase() }).exec();
        if(existingUser){
            res.status(400).send("This user already exist");;
            return
        }
        const encryptedPassword = await bcrypt.hash(password, 10)
        let newUser = new User({
            mail: mail.toLowerCase(),
            username,
            password: encryptedPassword
        })
        try {
         await newUser.save(); 
         return res.json({
            ok: true
        })  
        } catch (err) {
            console.log(err);
            res.status(500).send("Cant create user")
        }
    } 

const postLogin = async (req, res) => {
    try {
        const { mail, password } = req.body
        const user = await User.findOne({ mail: mail.toLowerCase() }).exec();
        if(!user){
            res.status(400).send("User does not exist please register");
            return;
        }
        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign({
                userId: user._id,
                mail
            }, process.env.JWT_TOKEN, {
                expiresIn: "7d"
            })
            return res.status(200).json({
                userDetails: {
                    mail: user.mail,
                    token,
                    username: user.username,
                    _id: user._id
                }
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong please try again");
    }
}

module.exports = {
    postRegister,
    postLogin
}
