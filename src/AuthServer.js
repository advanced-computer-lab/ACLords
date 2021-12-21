require('dotenv').config()
const jwt = require('jsonwebtoken');
const express = require("express");
const mongoose = require('mongoose');
const flightController = require('./Routes/flightController');
const userController = require('./Routes/userController');
const bodyparser = require("body-parser");
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.urlencoded({
    type: 'application/*+json'
  }))
  app.use(bodyParser.json());
  
  
  mongoose.connect("mongodb+srv://ACLords:1234qwer@airlinedb.e4p3f.mongodb.net/AirLineDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log("MongoDB is now connected"))
    .catch(err => console.log(err));
  
  app.use(cors());


let refreshTokens= []

app.post('/token', (req,res) => {
    const refreshToken = req.body.token
    if(refreshToken ==null) return res.sendStatus(401)
    if(refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) =>
    {
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({email: user.email})
        res.json({accessToken: accessToken})
    })
})

app.delete('/logout', (req, res)=>{
    refreshTokens= refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})
app.post("/SignUp", userController.addUser)

app.post('/SignUp', (req, res) => {
    console.log(req.body);
    userController.addUser(req.body);
}
)
app.post('/login', (req, res) =>{

    const email = req.body.email; 
    const password = req.body.password;
    const user = {
        email: email,
        password: password    
    }
    
    const accessToken= generateAccessToken(user)
    const refreshToken= jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json(
        {
            accessToken: accessToken, 
            refreshToken: refreshToken
        })
    })
    
    function generateAccessToken(user){
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s'})
    }

    function authenticateToken(req, res, next){
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1] 
      if(token == null) return res.sendStatus(401)
    
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user;
        next()
      })    
    }

    app.listen(4000)