const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute = require('./router/userrouter');


const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


mongoose.connect(`mongodb+srv://imedhamdi007:P8ozs8vTwKyoEmrr@api-nodejs.lpnpgx4.mongodb.net/`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());
app.use('/',userRoute);
module.exports = app;