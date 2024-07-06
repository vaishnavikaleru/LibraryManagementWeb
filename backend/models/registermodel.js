const mongoose=require('mongoose');

const registerschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});

const model=new mongoose.model('registermodel',registerschema);

module.exports=model;