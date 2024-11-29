const mongoose = require("mongoose");
const Tweet = require('../models/tweet.model.js');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;

async function accRegister(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json("All fields are required.");
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json("User already exists!!");
        }
        
        const newUser = new User({ username, email, password});
        await newUser.save();

        res.status(201).json("User registered successfully.");
    } catch (error) {
        res.status(500).json("Failed to register user!!");
    }
}

async function accLogin(req, res) {
    try{
        const input = req.body;

        const email = input.email;
        const password = input.password;
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("User does not exist!");
        }

        if (password !== user.password) {
            return res.status(400).json("Incorrect password!");
        }
        
         res
         .status(200)
         .json({ 
            email: email, 
            password: password, 
            message: "Login success!" 
        });
     } catch (error) {
       res.status(500).json("Failed to Login");
     }
}
    

async function postTweet(req, res) {
    try {
        const { username, tweet} = req.body;

        if (!username || !tweet) {
            return res.status(400).json("Username and Tweet content are required!")
        }

        const newTweet = new Tweet({ username, tweet});
        const result = await newTweet.save();

        res.status(200).json({
            message: "Tweet posted!",
            tweet: result
        });
    } catch (error) {
        res.status(500).json("Failed to post your Tweet!")
    }
}


module.exports = {
    accRegister,
    accLogin,
    postTweet
}