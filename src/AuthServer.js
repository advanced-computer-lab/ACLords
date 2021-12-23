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
const User = require('./models/Users');
const bcrypt = require('bcrypt')

//D
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Flight Payment" }],
])

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "egp",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `http://localhost:3000/ReturnFlight`,
      cancel_url: `http://localhost:3000/ViewDetails`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})


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


let refreshTokens = []

app.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ email: user.email })
    res.json({ accessToken: accessToken })
  })
})

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})
// app.post("/SignUp", userController.addUser)

app.post('/SignUp', (req, res) => {
  console.log(req.body);
  userController.addUser(req.body, res);
}
)



app.post('/login', async (req, res) => {

  User.find({ Email: req.body.Email })
    
    .then(async result => {
      if (result[0] == null) {
        res.send('Email does not exist. Please create new account.')
      }
      if (await bcrypt.compare(req.body.Password, result[0].Password)) {
        const user = {
          Email: req.body.Email,
          Password: req.body.Password
        }
        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)
        res.json(
          {
            accessToken: accessToken,
            refreshToken: refreshToken
          }) 
      }
      else {
        res.send('Password is incorrect')
      }

    }).catch(err => {
      console.log(err);
    });

})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user;
    next()
  })
}

app.listen(4000)