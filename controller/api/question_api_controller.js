const Question = require('../../model/question');
const Option=require('../../model/option');

//controller for creating a new question
module.exports.create=async function(req,res){
    console.log(req.body);
    try{
        let question=await Question.create({
            question:req.body.question,
            options:req.body.options
        });

        if(question){
            return res.json(200,{
                message:"Successfully created a question",
                question
            });
        }else{
            return res.json(421,{
                message:"Error in creating a question"
            })
        }
    }catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal server error"
        })
    }
}

//controller for displaying a question with every available option
module.exports.getAllQuestions=async function(req,res){
    let question=await Question.findById(req.params.id)
            .populate('options');
    if(question){
        let options=question.options;
        let arrayOption=[];
        for(let option of options){
            arrayOption.push({
                option:option.option,
                vote:option.vote,
                linkToUpvote:option.linkToUpvote
            });
        }
        return res.json(200,{
            message:"Hey found the question ",
            question:{
                question:question.question,
                options:arrayOption
            }
        })
    }
    else{
        return res.json(500,{
            message:"Internal server error"
        })
    }
}

//controller to add new option to a given question
module.exports.createOptions=async function(req,res){
    console.log(req.body);
    try{
        console.log(req.params.id);
        let question= await Question.findById(req.params.id);
        console.log(req.headers.host, req.protocol);
        if(question){
            let option= await Option.create({
                option:req.body.option,
                question:question._id,
                vote:0,
                linkToUpvote:" "
            });
    
            option.linkToUpvote=req.protocol + '://' + req.headers.host + "/api/options" + "/" + option.id + "/add_vote";
            option.save();
            question.options.push(option);
            question.save();
            return res.json(200,{
                message:"Successfully created a option",
                option:{
                    option:option.option,
                    link:option.linkToUpvote
                },
               
            })
        }else{
            return res.json(421,{
                message:"Invalid question"
            })
        }
    }catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal server error"
        })
    }
   
}

//controller to delete a question and all options associated with it
module.exports.deleteQuestion=async function(req,res){
    try{
        let question=await Question.findById(req.params.id);
        if(question){
            question.remove();

            await Option.deleteMany({question:req.params.id});

            return res.json(200,{
                message:"Question and associated options are deleted successfully"
            })
        }
    }catch(err){
        return res.json(500,{
            message:"Internal server error"
        })
    }
}
