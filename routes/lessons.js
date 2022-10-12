const express=require('express');
const router=express.Router();
const { Lesson } = require('../models/lesson.model');


router.get('/',async(req,res)=>{
    try{
        let lessons = await Lesson.find({})
        if(lessons==null){
            console.log("found lessons")
            res.status(201).json({success:true,lessons:lessons})
        }
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        let lesson = await Lesson.findOne({userId:id})
        if(lesson==null){
            console.log("found lesson")
            res.status(201).json({success:true,lesson:lesson})
        }
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

router.post('/:id',async(req,res)=>{
    const id = req.params.id;
    const lesson = req.body.lesson
    try{
        let updatedLesson= await Lesson.findByIdAndUpdate(lesson._id,lesson)
        if(updatedLesson==null){
            console.log("updated lesson")
            console.log(updatedLesson)
            res.status(201).json({success:true})
        }
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

router.delete('/:id',async(req,res)=>{
    const lesson = req.body.lesson
   
    try{
        await Lesson.findByIdAndRemove(lesson._id),
        res.status(201).json({success:true})
        
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

module.exports=router;
