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
        response=msg.image.id;
        //write logic to extract the image from the msg
    }


    return response;

}

module.exports={
  getUserResponse
}