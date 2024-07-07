const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
const registerPageRoute=require('./Routes/registerroute.js');
const collectionPageRoute=require('./Routes/CollectionRoute.js');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
dotenv.config({
path: 'config.env',
debug: true,
});

app.use('/user',registerPageRoute);
app.use('/collection',collectionPageRoute);

mongoose.connect(process.env.MONGO_URI,{dbName:'LibraryManagement'})
.then(e=>console.log('database connected successfully!'))
.catch(e=>console.log(e.message));


app.listen(process.env.PORT || 2000,()=>{
    console.log('connection established!');
});
