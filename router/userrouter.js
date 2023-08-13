const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/controllers');
router.post('/', userCtrl.Signup);
router.get('/',userCtrl.getAllUsers)
module.exports = router;