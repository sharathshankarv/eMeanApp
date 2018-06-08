const express = require('express');
const router = express.Router();
var seller = require('../../models/sellers');

router.get('/getAllsellers', (req, res, next)=>{
    seller.find(function(err, sellers){
        res.json(sellers);
    })
})

router.post('/addSeller', (req, res, next)=>{    
    let newSeller = new seller({
        'name': req.body.name,
        'user_Rating': req.body.userRating
    });

    newSeller.save((err, succ)=>{
        // if(err.code === 11000 )
        // { res.json({'status': 'fail', 'message': 'Seller Alerady exists'});
        // }else{
        //     res.json({'status': 'fail', 'message': 'Seller couldnt save', 'err': err});
        // }

        if(err) res.json({'status': 'fail', 'message': 'Seller couldnt save', 'err': err});

        res.json({'status': 'success', 'message': 'Seller saved successfully'});
    })
})

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