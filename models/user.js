var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const JSON = require('circular-json');

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
        name: userObj.name,
        password: hash,
        email: userObj.email,
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
    return new Promise((resolve, reject) => {
        console.log(userObj.name);
        userSchema.findOne({
            $or: [
                   { name : userObj.name },
                   { birth: userObj.email }
                 ]
        })
        .then(result => resolve(result))
        .catch(err => reject(err));
    })
}