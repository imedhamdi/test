


const User = require('../models.js');

exports.Signup = (req, res,next) =>{

    
    const newuser = new User({
       ...req.body
    })
    newuser.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => {
            res.status(400).json({ error });
        }).catch(error => res.status(500).json({ error }));

}
exports.getAllUsers = (req, res, next) => {
    User.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }));
  };
