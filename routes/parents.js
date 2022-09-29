const express=require('express');
const router=express.Router();
const { Parent } = require('../models/parent.model');


router.get('/',async(req,res)=>{
    try{
        let parents = await Parent.find({})
        if(parents==null){
            console.log("found parents")
            res.status(201).json({success:true,parents:parents})
        }
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        let parent = await Parent.findOne({userId:id})
        if(parent==null){
            console.log("found parent")
            res.status(201).json({success:true,parent:parent})
        }
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

router.post('/:id',async(req,res)=>{
    const id = req.params.id;
    const parent = req.body.parent
    try{
        let updatedParent= await Parent.findByIdAndUpdate(parent._id,parent)
        if(updatedParent==null){
            console.log("updated parent")
            console.log(updatedParent)
            res.status(201).json({success:true})
        }
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

router.delete('/:id',async(req,res)=>{
    const parent = req.body.parent
   
    try{
        await Parent.findByIdAndRemove(parent._id),
        res.status(201).json({success:true})
        
       
    }catch(error){
        console.log(error);
        res.status(400).json({success:false})
    }
})

module.exports=router;
