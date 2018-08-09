var express = require('express');
var router = express.Router();
var User = require('../model/dataSchema');

router.post('/create',(req,res,next)=>{
    var newUser = new User({
        username: req.body.username,
        address: req.body.address,
        contact:req.body.contact,
        email: req.body.email
    });

    newUser.save((err,user)=>{
        if(err)
        {
            res.status(500).json({errMsg: err});
        }
        res.status(200).json({msg: user});
    });
})

router.get('/read',(req ,res,next)=>{
    User.find({},(err,users)=>{
        if(err)
        {
            res.status(500).json({errMsg: err});
        }
        res.status(200).json({msg: users});
    });
})

router.put('/update',(req,res,next)=>{
   User.findById(req.body._id,(err,user)=>{
        if(err)
        {
            res.status(500).json({errMsg: err});
        }
        user.username = req.body.username;
        user.address = req.body.address;
        user.contact = req.body.contact;
        user.email = req.body.email;
        user.save((err,user)=>{
            if(err)
            {
                res.status(500).json({errMsg: err});
            }
            res.status(200).json({msg: user});

        });
     
   })
})

router.delete('/delete/:id',(res,req,next)=>{
    User.findOneAndRemove({_id: req.params.id},(err,user)=>{
        if(err)
        {
            res.status(500).json({errMsg: err});
        }
        res.status(200).json({msg: user});
    });
})


module.exports = router;


