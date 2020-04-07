const express = require('express');

const router=express.Router();
const questionApi=require('../../controller/api/question_api_controller');

router.post('/create',questionApi.create);
router.get('/:id',questionApi.getAllQuestions);
router.use('/:id/options/create',questionApi.createOptions);
router.delete('/:id/delete',questionApi.deleteQuestion);

module.exports=router;