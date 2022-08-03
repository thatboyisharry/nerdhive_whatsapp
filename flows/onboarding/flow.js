const { askName, parent_or_learner, start, what_grade_learner, what_grade_parent } = require("./ui")
const { onboardingNodes } = require ("./nodes")



 const onboardingFlow={
    name:'onboarding',
    user_interfaces:[
        start,
        askName,
        parent_or_learner,
        what_grade_learner,
        what_grade_parent
    ],
    nodes:onboardingNodes

    
    
}
 
module.exports={
  
  onboardingFlow,
 
}