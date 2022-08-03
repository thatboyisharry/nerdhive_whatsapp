const { createButton, createInteractiveButton, createTextUI } =require("../../messages/templates");


////////////////////////
let message = "Welcome to NerdHive Academy"
 const start = createTextUI('start',message)
//////////////////////////
 const askName = createTextUI('askName','what is your name ?');
///////////////////////////


const parent = createButton('parent','Parent');
const learner = createButton('learner','Learner');
let buttons=[parent,learner]
 const parent_or_learner = createInteractiveButton('parent_or_learner',buttons);
parent_or_learner.value.body.text="which one are you ?"




////////////////////////////
let grade_message = "What grade are you in ?"
 const what_grade_learner = createTextUI('what_grade_learner',grade_message);

//////////////////////////////////
let grade_message_parent ='What grade is your child ?'
 const what_grade_parent = createTextUI('what_grade_parent',grade_message_parent)
 
 
module.exports= {
  start,
  askName,
  parent_or_learner,
  what_grade_learner,
  what_grade_parent
  
}