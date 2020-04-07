const express = require('express');

const router=express.Router();
const optionApi=require('../../controller/api/options_api_controller');

router.delete('/:id/delete',optionApi.deleteOption);
router.post('/:id/add_vote',optionApi.addVote);

module.exports=router;