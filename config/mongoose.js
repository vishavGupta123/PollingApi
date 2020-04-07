//using mongoose to connect to the mongodb database
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/QuestionDataBase');

const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error in connecting the database "));
db.once('open',function(){
    console.log("Successfully connected to database");
});

module.exports=db;