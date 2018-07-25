var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const JSON = require('circular-json');
const jwt = require('jsonwebtoken');
const config = require('../config');

var UserModel = mongoose.Schema({    
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone:{
        type: String,
        require: true
    }    
});

var userSchema = mongoose.model('User', UserModel);

exports.User = userSchema;

exports.signUp = (userObj) =>{
    let hash = bcrypt.hashSync(userObj.password, 10);    
    var newUser = new userSchema({
        name: userObj.name.toLowerCase(),
        password: hash,
        email: userObj.email.toLowerCase(),
        phone: userObj.phone
    });

    return new Promise((resolve, reject)=>{
        newUser.save()
        .then(result => resolve(result))
        .catch(err => reject(err));
    })
}

exports.getAllUsers = function(){
    return new Promise((resolve, reject) => {
        userSchema.find({})
        .then(result => resolve(result))
        .catch(err => reject(err));
    })
}

exports.signIn = (userObj) => {
    console.log("secret " + config.secret);           
    return new Promise((resolve, reject) => {
        if(userObj.password !== "" && userObj.hasOwnProperty("password")){        
            userSchema.findOne(
                {
                $or: [                          
                        { 'email' : userObj.email.toLowerCase()}
                    ]
            },{})
            .then(result => {
                bcrypt.compare(userObj.password, result.password, function(err, res) {
                    if(err) reject(err);

                    if(res){
                        const payload = {
                            id: result._id,
                            email: result.email
                        }
                        var token = jwt.sign(payload, config.secret, {
                            expiresIn: '1h' // expires in 1 hours
                        });

                        var resObj = { success: true, message: 'Enjoy your token!', token: token };
                        resolve(resObj);
                    }
                });
            })
            .catch(err => reject(err));
        }else{
            reject({
                "requiredErr":"Password Required"
            });
        }
    })
}