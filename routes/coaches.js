const express=require('express');
const router=express.Router();
const { Coach} = require('../models/coach.model');


router.get('/',async(req,res)=>{
    try{
        let coaches = await Coach.find({})
        if(coaches==null){
            console.log("found coaches")
            res.status(201).json({success:true,coaches:coaches})
        }
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        let coach = await Coach.findOne({userId:id})
        if(coach==null){
            console.log("found coach")
            res.status(201).json({success:true,coach:coach})
        }
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

router.post('/:id',async(req,res)=>{
    const id = req.params.id;
    const coach = req.body.coach
    try{
        let updatedCoach= await Coach.findByIdAndUpdate(coach._id,coach)
        if(updatedCoach==null){
            console.log("updated coach")
            console.log(updatedCoach)
            res.status(201).json({success:true})
        }
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

router.delete('/:id',async(req,res)=>{
    const coach = req.body.coach
   
    try{
        await Coach.findByIdAndRemove(coach._id),
        res.status(201).json({success:true})
        
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

module.exports=router;