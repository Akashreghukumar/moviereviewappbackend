const express=require('express');
const router=express.Router();
const movieModule=require('../module/movieModule');


router.post('/create',movieModule.postMovies)
router.get('/get',movieModule.getMovies)
router.delete('/delete',movieModule.deleteMovie)

module.exports=router;