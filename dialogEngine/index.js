const {sendResponse,updateStatus} = require("./sendResponse");
const {getUserResponse} = require("./getUserResponse");
const {getBotResponses} = require("./getBotResponse");



module.exports={
  sendResponse,
  getBotResponses,
  getUserResponse,
  updateStatus
}