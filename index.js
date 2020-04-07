const express = require('express');
const app=express();
const db=require('./config/mongoose');
const port=8000;


app.use(express.urlencoded());
app.use('/',require('./routes'));

app.listen(port,function(err){
    console.log("Successfully running the server ");
})