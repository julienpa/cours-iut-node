"use strict";

const express = require('express');
const app = express();
const cookieSession = require("cookie-session");
const defaultRoutes = require("./routes/default.js");
const projectRoutes = require("./routes/projects.js");
const contactRoutes = require("./routes/contact.js");
const loginRoutes = require("./routes/login.js");

//Route vers les ressources statiques
app.use(express.static("public"));

//Decoder le 'body' envoyé depuis un formulaire
app.use(express.urlencoded({extended:true}));

//Handle cookies
app.use(cookieSession({
    name: "ma_session",
    keys: ["secret_key"],
    //Cookie options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use((req, res, next) => {
    if(req.session && req.session.userId) {
        res.locals.username = req.session.username
    }
    next();
})


//Route par défaut
app.use("/", defaultRoutes);

//Route pour projets
app.use("/projects", projectRoutes);

//Route pour contact
app.use("/contact", contactRoutes);

//Route pour login
app.use("/login", loginRoutes);

//On veut utiliser PUG comme moteur de template
app.set("view engine", "pug");


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});



