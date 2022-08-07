/*
 * Starter Project for WhatsApp Echo Bot Tutorial
 *
 * Remix this as the starting point for following the WhatsApp Echo Bot tutorial
 *
 */

"use strict";

// Access token for your app
// (copy token from DevX getting started page
// and save it as environment variable into the .env file)
const token = process.env.WHATSAPP_TOKEN;

// Imports dependencies and set up http server
const request = require("request"),
  express = require("express"),
  
  body_parser = require("body-parser"),
  axios = require("axios").default,
  app = express().use(body_parser.json()); // creates express http server
  const mongoose = require('mongoose');
  const path = require('path');
  const { getUserResponse,getBotResponses,sendReponse,updateStatus } = require('./dialogEngine');
 
  const { getUser } = require('./services/apiCalls');


// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));
let dbRoute=process.env.MONGO_URL;
mongoose.connect(dbRoute);
let db=mongoose.connection;
db.once('open',()=>{
            console.log("Connected to the database");
             
          })
             
// Accepts POST requests at /webhook endpoint
app.post("/webhook",async(req,res)=>{
    const body = req.body
    if(body.object){
      if (
        req.body.entry &&
        req.body.entry[0].changes &&
        req.body.entry[0].changes[0] &&
        req.body.entry[0].changes[0].value.messages &&
        req.body.entry[0].changes[0].value.messages[0]
      ){

            let post = body.entry[0].changes[0]
            let incoming=post.value;
            if(post.field !== 'messages'){
            // not from the messages webhook so dont process
              console.log("not from client do not process")
              return res.sendStatus(400)
            }
            console.log(JSON.stringify(req.body, null, 2));          
            let phone_number_id = incoming.metadata.phone_number_id;
            let msg =incoming.messages[0];
            let user_num=msg.from;
            console.log("incoming message")
            console.log(msg)
            
            
            try{
              await updateStatus(phone_number_id,token,msg,"read")
              let user = await getUser(user_num);
              let user_response=await getUserResponse(msg);
              let bot_responses=await getBotResponses(user,user_response)
              sendResponse(phone_number_id,token,user_num,bot_responses)
            }catch(error){
              console.log(error);

            }

        }
        
      res.sendStatus(200);
            
  }

})
  
db.on('error',console.error.bind(console,'Connection to database failed'));

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests 
app.get("/webhook", (req, res) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
  **/
  const verify_token = process.env.VERIFY_TOKEN;

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === verify_token) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});
