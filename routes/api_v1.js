const express = require ('express');
const router = express.Router();
 
const User = require ('../models/user');

router.get('/users', (req,res)=>{
    User.find({} , (err, users)=>{
        res.json(users);
    });
});

router.post('/users',(req,res) => {
    delete req.body._id;
    
    User.create(req.body , (err,user)=> {
        
        if(err){
            res.json(err)
            console.log(err)
        }
        else{
            res.json(user);
        
        }
    });
});

router.put('/users/:id',(req,res) => {
    // console.log(req.params);
    // delete req.body.id
    User.updateOne({_id: req.params.id}, req.body ,(err,user)=>{
        if(err){
            res.json(err)
            console.log(err)
        }
        else{
            res.json(user);
            // console.log("giardado<----Api")
        }
    })
});

router.delete('/users/:id',(req,res) => {
    console.log(req.params);
    // delete req.body.id
    User.deleteOne({_id: req.params.id},(err,user)=>{
        if(err){
            res.json(err)
            console.log(err)
        }
        else{
            res.json(user);
            // console.log("giardado<----Api")
        }
    })
});

module.exports=router