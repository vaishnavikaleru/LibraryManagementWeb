const model=require('../Models/registrationmodel.js');
const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');


router.post('/register',async(req,res)=>{
    const body=req.body;

    const user=await model.find({email:body.email});
    if(user)
    {
        res.json('Email already exist! Kindly Login!');
        return;
    }
    if(body)
    {
        try
        {
            const user=new model(body);
            await user.save();
            res.json('Registered Successfully');
        }
        catch(exp)
        {
            res.json('Error in Saving details!');
        }
    }
    else
    {
        res.json('Form Filling error!');
    }
});

module.exports=router;