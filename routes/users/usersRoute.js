const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var userCtrl = require('../../controllers/userCtrl');

router.post('/signUp',userCtrl.signUp);
router.post('/signIn',userCtrl.signIn);
router.get('/getAllUsers', userCtrl.getAllUsers);

module.exports = router;