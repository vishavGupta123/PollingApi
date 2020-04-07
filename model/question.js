//model for question collection
const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({
    question:{
        type:String,
        unique:true,
        required:true
    },
    options:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option'
    }]

});

const Question=mongoose.model('Question',questionSchema);
module.exports=Question;