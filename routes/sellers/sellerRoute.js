const express = require('express');
const router = express.Router();
var seller = require('../../models/sellers');

var sellerCtrl = require('../../controllers/sellerCtrl');

router.get('/getAllsellers', (req, res, next)=>{
    seller.find(function(err, sellers){
        res.json(sellers);
    })
})

router.post('/addSeller', sellerCtrl.addSeller);

// router.post('/addSeller', (req, res, next)=>{    
//     let newSeller = new seller({
//         'name': req.body.name,
//         'user_Rating': req.body.userRating,
//         'email': req.body.email
//     });

//     newSeller.save((err, succ)=>{
//         if(err){
//             if(err.code === 11000 )
//             {  
//                 return res.status(500).send({ "status": "fail", message: 'Seller Email already exist!' });            
//             }
//             return res.status(500).send(err);
//         }

//         res.json({'status': 'success', 'message': 'Seller saved successfully'});
//     })
// })

router.get('/editSeller/:id', (req, res, next)=>{
    // let editSeller = new seller({
    //     "name": req.body.name,
    //     "email": req.body.email,
    //     'user_Rating': req.boby.userRating
    // });
    var id = req.params.id;
    console.log(id);
    seller.find({ _id: id }, (err, result)=> {
        if (err) res.json(err);

            console.log();        
            res.json(result);
      });
})

router.get('/deleteSeller/:id', (req, res, next)=>{
    seller.deleteOne({_id: req.params.id}, (err, result)=>{
        if(err) res.json(err);

        if(result){
            if(result.n === 0){
                res.json({"status": "fail", "msg": "User has been already deleted", "result": result});
            }else{
                res.json({"status": "success", "msg": "User has been deleted", "result": result});
            }
        }
        
    })
});

router.get('/deleteAllSellers', (req, res)=>{
    seller.deleteMany((err, succ)=>{
        if(err) console.log('err', err);

        res.json({
            status: 'success',
            message: "successfully deleted data"
        })
    });
})

module.exports = router;