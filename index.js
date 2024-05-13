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
const bcrypt = require('bcryptjs');
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
        maxAge: 500000,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'

    },
    resave:false,
    saveUninitialized: false
}));


const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true  // This allows cookies to be sent with the request
};

app.use(cors(corsOptions));



function checkSession(req, res, next) {
    if (!req.session.user) {
        // If there is no session user, redirect to login page
        res.redirect('/login');
    } else {
        // Proceed to next middleware or route handler
        next();
    }
}

// Main page Russian       ##############################################################################

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/login.html");
    console.log("we are on the home page");
});

app.post("/openReg", async (req, res) => {
    console.log("we are on the stage of post open register action");
    try{
        res.redirect("/reg");
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});

app.get("/reg", (req, res) => {
    console.log("we got /regostration adress");
    res.sendFile(__dirname + "/pages/reg.html");
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
    res.sendFile(__dirname + "/pages/login.html");
});

app.post("/openLoginKyrg", async (req, res) => {
    try{
        res.redirect("/loginKyrg");
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/loginKyrg", (req, res) => {
    console.log("we got /indexKyrg");
    res.sendFile(__dirname + "/pages/loginKyrg.html");
});

// Main page Kyrgyz       ##############################################################################

app.post("/openRegKyrg", async (req, res) => {
    console.log("we are on the stage of post open register action Kyrg");
    try{
        res.redirect("/regKyrg");
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/regKyrg", (req, res) => {
    res.sendFile(__dirname + "/pages/regKyrg.html");
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
            req.session.user = userData._id;
            const curUser = await User.findById(req.session.user);
            console.log(curUser);
            currentUser = userData;
            res.redirect('/levels');
        } else {
            res.redirect('/regError');
        }
    } catch (error) {
        console.error(error);
        res.redirect('/error');
    }
});

app.post('/registerKyrg', async (req, res) => {
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
            req.session.user = userData._id;
            const curUser = await User.findById(req.session.user);
            console.log(curUser);
            currentUser = userData;
            res.redirect('/levelsKyrg');
        } else {
            res.redirect('/regErrorKyrg');
        }
    } catch (error) {
        console.error(error);
        res.redirect('/error');
    }
});

app.get("/regError", (req, res) => {
    res.sendFile(__dirname + "/pages/regError.html");
});
app.get("/regErrorKyrg", (req, res) => {
    res.sendFile(__dirname + "/pages/regErrorKyrg.html");
});


app.post("/loginAction", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        // We compare the hashed passwords here, not re-hash the input password
        if (user && await bcrypt.compare(password, user.password)) {
            // Passwords match, so proceed with login
            // req.session.regenerate((err) => {
            //     if (err) {
            //         res.redirect("/indexLoginError");
            //         return;
            //     }

                // Store user info in session, typically a user ID
                req.session.authenticated = true;
                req.session.user = user._id;
                currentUser = user;
                const curUser = await User.findById(req.session.user);
                console.log(curUser);
                console.log(req.session.user);
                res.redirect("/levels");
            //});
        } else {
            res.redirect("/loginError");
        }
    } catch (error) {
        console.log(error);
        res.redirect("/loginError");
    }
});

app.post("/loginActionKyrg", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        // We compare the hashed passwords here, not re-hash the input password
        if (user && await bcrypt.compare(password, user.password)) {
            // Passwords match, so proceed with login
            // req.session.regenerate((err) => {
            //     if (err) {
            //         res.redirect("/indexLoginError");
            //         return;
            //     }

                // Store user info in session, typically a user ID
                req.session.authenticated = true;
                req.session.user = user._id;
                currentUser = user;
                const curUser = await User.findById(req.session.user);
                console.log(curUser);
                console.log(req.session.user);
                res.redirect("/levelsKyrg");
            //});
        } else {
            res.redirect("/loginErrorKyrg");
        }
    } catch (error) {
        console.log(error);
        res.redirect("/loginErrorKyrg");
    }
});


app.get("/loginError", (req, res) => {
    res.sendFile(__dirname + "/pages/loginError.html");
});
app.get("/loginErrorKyrg", (req, res) => {
    res.sendFile(__dirname + "/pages/loginErrorKyrg.html");
});

app.post("/openLevels", async(req, res) => {
    try{
        console.log("we are in levels page and here is req.session");
        console.log(req.session.user);
        res.redirect("/levels");
        
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }

});
app.post("/openLevelsKyrg", async(req, res) => {
    try{
        console.log("we are in levels page and here is req.session");
        console.log(req.session.user);
        res.redirect("/levelsKyrg");
        
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }

});

app.get("/levels", checkSession, (req, res) => {
    res.sendFile(__dirname + "/pages/levels.html");
});
app.get("/levelsKyrg", checkSession, (req, res) => {
    res.sendFile(__dirname + "/pages/levelsKyrg.html");
});

app.post("/levelOne", async (req, res) => {
    try{
        console.log("we are in levels page and here is req.session");
        console.log(req.session.user);
        res.redirect("/level01");
        
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.post("/levelOneKyrg", async (req, res) => {
    try{
        console.log("we are in levels page and here is req.session");
        console.log(req.session.user);
        res.redirect("/level01Kyrg");
        
    }
    catch (error){
        console.log(error);
        res.redirect("/error");
    }
});
app.get("/level01", checkSession, (req, res) => {
    res.sendFile(__dirname + "/pages/level01.html");
});
app.get("/level01Kyrg", checkSession, (req, res) => {
    res.sendFile(__dirname + "/pages/level01Kyrg.html");
});
app.get("/error", (req, res) => {
    res.sendFile(__dirname + "/pages/error.html");
});


app.post("/updateLevelOneA", async (req, res) => {
    try {
        const curUser = await User.findById(req.session.user);
        console.log("found ID");
        let levelOne = curUser.level1;
        //let levelOne = currentUser.level1;
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
        console.log(curUser);
        console.log("found ID");
        let levelOne = curUser.level1;
        //let levelOne = currentUser.level1;

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