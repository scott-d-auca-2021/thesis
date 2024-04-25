const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require('bcrypt');
const saltRounds = 10; // Уровень сложности хеширования



const app = express();
dotenv.config();


const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.iq19eit.mongodb.net/usersDB`);


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    level1: String,
    level2: String
});

const User = mongoose.model("User", userSchema);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/pages"));
app.use(express.static(__dirname));


// Configure session middleware
app.use(session({
    secret: 'your-secret-key',
    cookie: {
        maxAge: 3000000,
        httpOnly: true,
        secure: true

    },
    resave:false,
    saveUninitialized: false
}));


const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true  // This allows cookies to be sent with the request
};

app.use(cors(corsOptions));


// Main page Russian       ##############################################################################

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/indexLogin.html");
    console.log("we are on the home page");
});
app.post("/openRegister", async (req, res) => {
    console.log("we are on the stage of post open register action");
    try{
        res.redirect("/registration");
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/registration", (req, res) => {
    console.log("we got /regostration adress");
    res.sendFile(__dirname + "/pages/registration.html");
});

app.post("/openLogin", async (req, res) => {
    console.log("we are on the stage of post open login action");
    try{
        res.redirect("/login");
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/login", (req, res) => {
    console.log("we got /regostration adress");
    res.sendFile(__dirname + "/pages/login.html");
});

app.post("/openIndexKyrg", async (req, res) => {
    try{
        res.redirect("/indexKyrg");
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/indexKyrg", (req, res) => {
    console.log("we got /indexKyrg");
    res.sendFile(__dirname + "/pages/indexKyrg.html");
});

// Main page Kyrgyz       ##############################################################################

app.post("/openRegisterKyrg", async (req, res) => {
    console.log("we are on the stage of post open register action Kyrg");
    try{
        res.redirect("/registrationKyrg");
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/registrationKyrg", (req, res) => {
    console.log("we got /regostration adress");
    res.sendFile(__dirname + "/pages/registrationKyrg.html");
});

app.post("/openLoginKyrg", async (req, res) => {
    console.log("we are on the stage of post open login kyrg action");
    try{
        res.redirect("/loginKyrg");
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/loginKyrg", (req, res) => {
    console.log("we got /login adress");
    res.sendFile(__dirname + "/pages/loginKyrg.html");
});
app.post("/openIndex", async (req, res) => {
    try{
        res.redirect("/index");
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/index", (req, res) => {
    console.log("we got /index");
    res.sendFile(__dirname + "/pages/index.html");
});



app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const emptyString = "";

        // Хешируем пароль
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Проверяем, есть ли уже пользователь с таким email
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            // Создаем нового пользователя с хешированным паролем
            const userData = new User({
                name,
                email,
                password: hashedPassword, // Сохраняем хешированный пароль
                level1: emptyString,
                level2: emptyString
                // остальные поля...
            });

            await userData.save();

            // Создаем сессию для пользователя
            req.session.user = userData;
            res.redirect('/levels');
        } else {
            res.redirect('/registrationError');
        }
    } catch (error) {
        console.error(error);
        res.redirect('/error');
    }
});


app.post("/loginAction", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        // We compare the hashed passwords here, not re-hash the input password
        if (user && await bcrypt.compare(password, user.password)) {
            // Passwords match, so proceed with login
            req.session.regenerate((err) => {
                if (err) {
                    res.redirect("/indexLoginError");
                    return;
                }

                // Store user info in session, typically a user ID
                req.session.authenticated = true;
                req.session.user = user;
                res.redirect("/levels");
            });
        } else {
            res.redirect("/indexLoginError");
        }
    } catch (error) {
        console.log(error);
        res.redirect("/indexLoginError");
    }
});


app.get("/indexLoginError", (req, res) => {
    res.sendFile(__dirname + "/pages/indexLoginError.html");
});

app.post("/openLevels", async(req, res) => {
    try{
        res.redirect("/levels");
        
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }

});

app.get("/levels", (req, res) => {
    res.sendFile(__dirname + "/pages/levels.html");
});

app.post("/levelOne", async (req, res) => {
    try{
        res.redirect("/level01");
        
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/level01", (req, res) => {
    res.sendFile(__dirname + "/pages/level01.html");
});
app.get("/error", (req, res) => {
    res.sendFile(__dirname + "/pages/error.html");
});


app.post("/updateLevelOneA", async (req, res) => {
    try {
        const curUser = await User.findById(req.session.user);
        console.log("found ID");
        let levelOne = curUser.level1;
        levelOne+='a';


        // Find the user by email and update the level1 property
        const user = await User.findOneAndUpdate(
            {email: curUser.email},
            { $set: { level1: levelOne} },
            { new: true } // Return the updated document
        );

        req.session.user = user;

        // Check if the user exists
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Send a success response
        res.status(200).send("Level 1 data updated successfully");
    } catch (error) {
        // Handle errors
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/updateLevelOneB", async (req, res) => {
    try {
        const curUser = await User.findById(req.session.user);
        console.log("found ID");
        let levelOne = curUser.level1;
        levelOne+='b';


        // Find the user by email and update the level1 property
        const user = await User.findOneAndUpdate(
            {email: curUser.email},
            { $set: { level1: levelOne} },
            { new: true } // Return the updated document
        );

        req.session.user = user;

        // Check if the user exists
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Send a success response
        res.status(200).send("Level 1 data updated successfully");
    } catch (error) {
        // Handle errors
        console.log(error);
        res.status(500).send("Internal Server Error");
        
    }
});



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})