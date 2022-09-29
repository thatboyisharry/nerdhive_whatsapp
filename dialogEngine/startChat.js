const { getChatUser, updateUser, getUser } = require("../services/apiCalls")



const startChat=async(code,chatInitiator)=>{
    try {
        let clientUser = await getChatUser(code);
        if(!clientUser.session.chat.active){
            clientUser.session.chat.active=true;
            clientUser.session.chat.participant=chatInitiator.phone;
            chatInitiator.session.chat.active=true;
            chatInitiator.session.chat.participant=clientUser.phone;
            await updateUser(clientUser);
            await updateUser(chatInitiator);
            return true;
        }else{
            return  false
        }
         
    } catch (error) {
        console.log(error)
        return  false
    }
    
}

const endChat=async(user_text,chatTerminator)=>{
    let response = user_text.toLowerCase().split('');
   
    if(response.length==2){
        if(response[0]==='end'&&response[1]==='chat'){
            try {
                let clientUser = await getUser(chatTerminator.session.chat.participant);
                clientUser.session.chat.active=false;
                clientUser.session.chat.participant=null;
                chatTerminator.session.chat.active=false;
                chatTerminator.session.chat.participant=null;
                await updateUser(clientUser);
                await updateUser(chatTerminator);
                return true
            } catch (error) {
                console.log(error)
            }
           
        }     
    }
    return false;
}

module.exports={
    startChat,
    endChat
}