
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
var cookieParser = require('cookie-parser');
const jwt_secret = "jdwjinewnfimdojwdokdjewovcmofejio32943dhifh3uedksdcncdshncifunceof";
//it should be private and no one knows
//console.log(process.env.jwt_secret)

const app = express();

//const urlencodedParser = bodyarser.urlencoded({extended:true});
const port = process.env.PORT ||3000;
//server genrated for around the world optional with 3000      
//PORT
//.env use to secure same same data like jwt_secret code  


app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));



mongoose.connect("mongodb://127.0.0.1/shopdb"); //better than mysql cause in mysql we have to strictly follow the number of field for input

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: "chinkiminki2512@gmail.com",
        password: "chinki3603"
    }
});

const login = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}); //input formate
const l = mongoose.model("login", login);

//{}= is only for object pass /create
const account = new mongoose.Schema({
    name: String,
    email: String,
    phone: {
        type: String,
        unique: false
    },
    gender: String,
    age: Number,
    country: String,
    address: String,
    password: String,
    repassword: String,
    tokens: [{
        t: {
            type: String,
            required: true
        }
    }]  //[{}] =is as array of an object
});
const na = mongoose.model("account", account);

//for query pages
const query = new mongoose.Schema({
    name: String,
    email: String,
    phone: {
        type: String,
        unique: false
    },
    order: {
        type: String,
        unique: true
    },
    category: String,
    details: String
});
const q = mongoose.model("query", query);


//get method to read data
app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get('/home', (req, res) => {
    try {
        const token = req.cookies.jwt;
        console.log(token)
        const verify = jwt.verify(token, jwt_secret);
        console.log(verify);
        //.use to redirect after authneticing the user to private pages
        const user = na.findOne({ _id: verify._id });
        console.log(user);
        if (verify) {
            res.redirect("/index1.html");
        } else {
            res.redirect("/index.html");
        }
    }
    catch (error) {
        //res.status(500).send(error);
        console.log("user not logged-in");
        res.redirect("/index.html");
    }
});


app.get("/logout", async (req, res) => {
    try {
        const token = req.cookies.jwt;
        console.log(token)
        console.log("checktoken")
        console.log("log-out");
        res.clearCookie('jwt');
        res.cookie("jwt", "", { maxAge: -1, httpOnly: true });
        res.redirect("/login.html");
    }
    catch (error) {
        res.status(500).send(error);
    }
});

app.get('/cart', (req, res) => {
    try {
        const token = req.cookies.jwt;
        console.log(token)
        const verify = jwt.verify(token, jwt_secret);
        console.log(verify);
        //.use to redirect after authneticing the user to private pages
        const user = na.findOne({ _id: verify._id });
        console.log(user);
        if (verify) {
            res.redirect("/cart.html");
        } else {
            res.redirect("/login.html");
        }
    }
    catch (error) {
        //res.status(500).send(error);
        console.log("user not logged-in");
        res.redirect("/login.html");
    }
});

app.get('/contact', (req, res) => {
    try {
        const token = req.cookies.jwt;
        console.log(token)
        const verify = jwt.verify(token, jwt_secret);
        console.log(verify);
        //.use to redirect after authneticing the user to private pages
        const user = na.findOne({ _id: verify._id });
        console.log(user);
        if (verify) {
            res.redirect("/contact.html");
        } else {
            res.redirect("/login.html");
        }
    }
    catch (error) {
        //res.status(500).send(error);
        console.log("user not logged-in");
        res.redirect("/login.html");
    }
});


//post method to store data
app.post("/newaccount.html", (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.number);
    console.log(req.body.gender);
    console.log(req.body.age);
    console.log(req.body.country);
    console.log(req.body.address);
    console.log(req.body.password);
    console.log(req.body.confirmpassword); //tree from and to acces it re.body.name
    na.findOne({ name: req.body.name, phone: req.body.number }, async (error, name, phone) => {
        if (error || name) {
            console.log('username taken');
        }
        // else if (error || phone ) {
        //     console.log('phone number taken');
        // }
        else {
            const hash_password = await bcrypt.hash("req.body.password", 10);
            console.log(hash_password);
            if (req.body.password === req.body.confirmpassword) { //triple === to also check data type
                const newuser = new na({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.number,
                    gender: req.body.gender,
                    age: req.body.age,
                    country: req.body.country,
                    address: req.body.address,
                    password: hash_password,
                    repassword: hash_password
                });
                //token generated
                const token = jwt.sign({
                    _id: newuser._id,
                    name: newuser.name
                }, jwt_secret);              // process.env.jwt_secret);
                console.log(token);
                newuser.tokens = newuser.tokens.concat({ t: token })
                //res.cookie() function is used to set the cookie name to value.
                //value may be a string or object converted to json
                res.cookie("jwt", token);
                //res.cookie("jwt"/*cookie name*/,token,{expires:new Date(Date.now()+50000)/*expires time*/,httpOnly:true /*clent side scripting language can't modify/remove*/});
                newuser.save();
                res.redirect("/index1.html");
            }
            else {
                res.redirect("/newaccount.html");
            }

        }
    })
});

//cookie- a shared secret b/w client and server like passwords
//JWT-clent proves itself somehow on the data or secret (is not changeable)
//jwt is not for storing sensitive data it is just to say the client that they can go ahead and use this token to communicate with me and i will autimatiaclly know that what you say you are is true or not
//in console write "atob("<token code>")" we and decode the token code into regular data
//Jwt token have 2 dots whicact as a seperator  for different things
//all the 3 parts are base 64 encoding of stuff
//start to 1 dot =is the header of jwt payload
//1 dot to 2 dot =is the original data stored which the jwt token is following
//2 dot to end =is just used for validation (that the data has not been tampered) /it is the hash and signature(like so with data I stored hash of password not oringinal password) similarly this is the hash of the oringinal data which the serevr generated

app.post("/newsletter",(req,res)=>{

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kajalrawat3603@gmail.com',
            pass: 'dgpxohtscwrylhwi'
        }
    });

    const mailOptions = {
        from: 'kr@gmail.com',
        to: req.body.email,
        subject: 'NewsLetters Registration',
        html:'<div><h2>You have been registerd for newsletters,Get E-mails updates on our latest shop and special offers !!! </h2><img src="cid:unique" ></div>',
        attachments:[{
            filename:"6122731.jpg",
            path:"C:/Users/KAJAL/miniproject/public/images/6122731.jpg",
            cid:"unique",
        }]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.redirect("/index.html");
})
app.post("/change-password.html", (req, res) => {
    const { token } = req.body
    const user_verify = jwt.verify(token, process.env.jwt_secret)
    //give decoded verson of 1 dot to 2 dot part of token
    console.log(user_verify)
})

app.post("/login.html", async function (req, res) {
    //post:to get the data back from the front end
    const name = req.body.name
    const user = await na.findOne({ name });
    if (!user) {
        console.log("user not registered !!!")
        res.redirect("/login.html");
    }
    else if (bcrypt.compare("req.body.password", user.password)) {
        console.log("password match")
        const token = jwt.sign({
            _id: user._id,
            name: user.name
        }, jwt_secret);
        console.log(token);
        //  const user_verify =jwt.verify(token,jwt_secret); //process.env.jwt_secret)
        res.cookie("jwt", token);
        console.log(req.cookies.jwt);
        res.redirect("/index1.html");
    }
    else {
        res.redirect("/login.html");
    }
});


app.post("/contact.html", async function (req, res) {
    const newquery = new q({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        order: req.body.order,
        category: req.body.category,
        details: req.body.query
    })
    newquery.save();
    //res.json("Thanks For Your Feedback,Your Query Will be solved Soon !!!")
    console.log("Thanks For Your Feedback,Your Query Will be solved Soon !!!")


    //sending email on receving query
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kajalrawat3603@gmail.com',
            pass: 'dgpxohtscwrylhwi'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'kajalrawat3603@gmail.com',
        subject: 'Oreder Query',
        text: `Thanks For Your Feedback,Your Query Will be solved Soon !!! 
        Name : ${req.body.name}
        Email : ${req.body.email}
        Phone Number : ${req.body.phone}
        Order Code : ${req.body.order}
        Category : ${req.body.category}
        Details : ${req.body.query}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.redirect("/index.html");
})


app.listen(3000, function () {
    console.log("server is live on 3000");
});

//async :asynchronous used than other function will be done simantamiously  but same with sync(synchronous).
// const securepassword = async (password//parameter) => {
//     const passwordhash = await bcrypt.hash(password, 10/*by deafult-10 rounds */);
//     //writen a promise that in future it will return a data either full fill or rejected therfore we use await
//     console.log(passwordhash);
//     const comparepasswordhash = await bcrypt.compare(password,/*by deafult-10 rounds*/);
//     //writen a promise that in future it will return a data either full fill or rejected therfore we use await
//     console.log(passwordhash);}
/* securing password using hashing(can not convertedback to original code, it is a one way algorithum eg:mds(some how 2 way),bcrypt-4 rounds(4 rounds are faster,159 days to resolve password),bcrypt-12 rounds(12 rounds are time consuming,3 years to solve pasword)) not encryption decription(drawback can be de code easily)
*/
// app.get("/logout", function(req, res){
//     req.logout();
//     res.redirect("/");
// });
