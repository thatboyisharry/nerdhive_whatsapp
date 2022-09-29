const {getProperty} = require("../services/apiCalls");

// const sendTemplateMessage=async(template,data,receiver)=>{

// }

const templateActionsHandler=async(message,user)=>{
    const { template } = message;
    let filledTemplate

    // if(template.name==='landlord_or_renter'){
    //     filledTemplate = await landlordOrRenter_Actions(template,user)
    // }
    
    message.template=filledTemplate
    return message.template=filledTemplate

}

// const landlordOrRenter_Actions = async(template,user)=>{
    
//     template.components[0].parameters[0].text=user.name;
//     return template
// }

module.exports={
  templateActionsHandler
}