// const { Flows } = require('../flows');
const { getProject } = require('../services/apiCalls');



 ////////////
 const getTransition=(node,user_response)=>{
  console.log("getting transition...")
  console.log(user_response)
  let response
    if(user_response){
        let response =user_response
        for(let i = 0; i< node.transitions.length;i++){
          let transition = node.transitions[i];
          if(transition.name==response){
            console.log("transition")
            console.log(transition)
              return transition
          }
          if(transition.trigger&&transition.trigger===response){
            console.log(transition)
            return transition
          }
        }
    }
    
 
      // if we are just starting a new flow
    
      //if node has only one none response dependent transition
   
   
    if(node.sticky){
      return null
    }
   
    if(node.transitions.length==1){
      return node.transitions[0]
    }
   if(node.name==='start'){
      console.log("node is start")
      return node
    }
   
   
    return null
}

const getNode=(flow,node_name)=>{

    let nodes=flow.nodes
    console.log("getting flow nodes")
    // console.log(nodes)
    console.log("node name")
    console.log(node_name)
    for(let i = 0; i < nodes.length;i++){
        if(nodes[i].name===node_name){
            return nodes[i];
        }

    }
}

const getFlow=async(flow_name)=>{
    // try{
    //     let flow = await Flow.findOne({name:flow_name})
    //     return flow
    // }catch(error){
    //     console.log(error)
    // }
  const PROJECT_NAME='kasi rentals'

  const Project=await getProject(PROJECT_NAME);     
//   console.log(Project)
  
    let Flows=Project.flows
    for(let i = 0 ; i < Flows.length; i++){
        let flow = Flows[i]
        if(flow.name===flow_name){
            return flow
        }
    }
}

const getMessages=async(transition,user)=>{
    let flow = await getFlow(transition.flow);
    let node=transition
   console.log(flow)
  console.log("transition")
  console.log(transition)
      node = await getNode(flow,transition.name);
    
    
    console.log("inside get messages")
    let messages = await getResponses(flow,node,user)

    return messages
}

const getResponses=async(flow,next_node,user)=>{
    console.log("inside get responses")
    let UIs=next_node.uis;

    let responses=[]
    console.log("the uis");
    console.log(UIs);
    console.log(UIs[0])
    for(let i = 0; i<UIs.length; i++){
        let user_interface=UIs[i];
        let bot_response=UIs[i].value;
        responses.push(bot_response);
        
      
//         if(user_interface.type==='template'){
//              bot_response={
//             messaging_product: "whatsapp",
//             recipient_type:"individual",
//             to:'', 
//             type:'template'
//             }
//             bot_response.template=user_interface.value
//             bot_response.template.components[0].parameters[0].text=user.name;
//             responses.push(bot_response)
//             console.log(responses)
//         }
    
    
    
       
 
    }


    return responses

}







    


module.exports = {
  getTransition,
  getMessages,
  getNode,
  getFlow
}