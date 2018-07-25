var userModel = require('../models/user');

exports.signUp = (req, res, next) => {
    userModel.signUp(req.body)
    .then(success => {
        console.log(success);
        res.send(success);
    })
    .catch(err => {
        res.send({
            status : 401,
            masg: "user not saved" ,
            err: err
        });
    })
}

exports.getAllUsers = (req, res, next) => {
    userModel.getAllUsers()
    .then(result => res.send(result))
    .catch(err => {       
        res.send({
            err: err,
            status: 401,
            msg: "something wrong"
        })        
    })
}

exports.signIn = (req, res, next) => {
    userModel.signIn(req.body)
    .then(success => {
        res.send(success)
    })
    .catch(err => {
        console.log("ctrl" , err);         
        if("requiredErr" in err){
            res.send({
                err: err,
                status: 401,
                msg: "Password Required"
            })
        }else{
            res.send({
                status: 401,
                err: err,
                msg: "Invald Login Credentials"
            })
        }
    })
}