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
const cookieParser = require('cookie-parser')
app.use(cookieParser())

//D
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Flight Payment" }],
])


// app.get('/set-cookies', (req,res)=> {
//   res.cookie('accessToken', )
// })

// app.get('/read-cookies', (req,res)=> {

// })


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
      success_url: `http://localhost:3000/ViewDetails/BookFlight`,
      cancel_url: `http://localhost:3000/ViewFlights`,
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



app.post('/Login', async (req, res) => {

  User.find({ Email: req.body.Email })

    .then(async result => {
      if (result[0] == null) {
        res.send('Email does not exist. Please create new account.')
      }
      if (await bcrypt.compare(req.body.Password, result[0].Password)) {
        const user = {
          _id: result[0]._id,
          Email: result[0].Email,
          Password: result[0].Password,
          FirstName: result[0].FirstName,
          LastName: result[0].LastName,
          CountryCode: result[0].CountryCode,
          TelephoneNumber: result[0].TelephoneNumber,
          PassportNumber: result[0].PassportNumber
        }
        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)
        const tokens = {
          result: result[0],
          accessToken: accessToken,
          refreshToken: refreshToken
        }
        // res.cookie('accessToken', accessToken)
        // res.cookie('refreshToken', refreshToken)
        console.log(user.body)
        console.log("foo2")
        res.send(tokens)
        // res.status(200).json({Email: req.body.Email})


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