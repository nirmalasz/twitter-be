const express = require("express");
const mongoose = require("mongoose");

const { getTimeline } = require("./services/timeline.services.js");
const { accRegister, accLogin, postTweet } = require("./services/user.services.js");

const app = express();

app.use(express.json());

app.get("/timeline", getTimeline);
app.post("/register", accRegister);
app.post("/login", accLogin);
app.post("/post", postTweet);


app.listen(5000, async () => {
    try{
        await mongoose.connect("mongodb+srv://ujang:123%21%40%23@intern.femyp.mongodb.net/twitter?retryWrites=true&w=majority&appName=Intern");
        
        console.log("Database is successfully connected.");
    } catch (error) {
        console.log("Database is failed to connect.");
    }

    console.log("Server is connected to http://localhost:5000.");
});


