const { Flows } = require('../flows');

const getUserResponse = (msg)=>{
    let response;
    let type=msg.type;
    const INTERACTIVE='interactive';
    const BUTTON='button';
    const TEXT='text';
    const BUTTON_REPLY='button_reply';
    const LIST_REPLY='list_reply';



    if(type===INTERACTIVE){
        let interactive_type = msg.interactive.type;
        if(interactive_type===BUTTON_REPLY){
            response=msg.interactive.button_reply.id;
        }

        if(interactive_type===LIST_REPLY){
            response=msg.interactive.list_reply.id;
        }
    }

    if(type===BUTTON){
        response=msg.button.payload;
    }

    if(type===TEXT){
        response=msg.text.body;
    }

    if(type==='image'){
        //write logic to extract the image from the msg
    }


    return response;

}
 ////////////
 const getTransition=(node,user_response)=>{
  console.log("getting transition...")
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
    console.log(nodes)
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
    let name = flow_name
    console.log("getting flow...")
   
    for(let i = 0 ; i < Flows.length; i++){
        let flow = Flows[i]
        if(flow.name===name){
          console.log("current flow")
          console.log(flow)
            return flow
        }
    }
}


const getMessages=async(transition,user_response)=>{
    let flow = await getFlow(transition.flow);
    let node=transition
   
      node = await getNode(flow,transition.node);
    
    
    console.log("inside get messages")
    let messages = await getResponses(flow,node)

    return messages
}

const getResponses=async(flow,next_node)=>{
    console.log("inside get responses")
    let UIs=[];
    for(let i = 0 ; i<next_node.uis.length;i++){
        let ui_name=next_node.uis[i].name
        let ui=await getUI(flow,ui_name)
        UIs.push(ui);
    }

    

    let responses=[]
     console.log("the uis");
    console.log(UIs);
  console.log(UIs[0])
    for(let i = 0; i<UIs.length; i++){
        let user_interface=UIs[i];
        let bot_response
       

        if(user_interface.type!=='text'){
            bot_response={
            messaging_product: "whatsapp",
            recipient_type:"individual",
            to:'', 
            type:'interactive'
            }
            bot_response.interactive=user_interface
            responses.push(bot_response)
        }
    
        if(user_interface.type==='text'){
            bot_response=user_interface
            responses.push(bot_response)
        }
    
    
        if(user_interface.type==='image'){
            responses.push(bot_response)
    
        }

    }


    return responses

}

const getUI=(flow,ui_name)=>{
    
    console.log("getting UIs...")
  console.log(flow.user_interfaces)
  console.log(ui_name)
    //set to check for failed action
    let flow_UIs=flow.user_interfaces;
    for(let i = 0; i<flow_UIs.length;i++){
        let ui=flow_UIs[i]
        if(ui.name===ui_name){
            return ui.value;
        }
    }
    
}





    


module.exports = {
  getUserResponse,
  getUI,
  getTransition,
  getMessages,
  getNode,
  getFlow
}