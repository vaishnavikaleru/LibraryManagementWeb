const mongoose=require('mongoose');

const collectionSchema=mongoose.Schema({
    collectionname:{
        type:String,
        required:true,
        unique:true
    },
    language:{
        type:String,
        required:true,
        default:'English'
    }
});

const model=new mongoose.model('collectionmodel',collectionSchema);

module.exports=model;