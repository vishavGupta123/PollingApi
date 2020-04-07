//model for options 
const mongoose=require('mongoose');

const optionSchema=new mongoose.Schema({
    option:{
        type:String,
        required:true
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"
    },
    vote:{
        type:Number
    },
    linkToUpvote:{
        type:String,
        required:true
    }
});

const Option=mongoose.model('Option',optionSchema);
module.exports=Option;