const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');



app.listen(process.env.PORT || 2000,()=>{
    console.log('connection established!');
});
