

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Nom: { type: String },
  Prenom: { type: String },
  Ville: { type: String},
  date: { type: Date, default: Date.now },

});
module.exports = mongoose.model('User', userSchema)
