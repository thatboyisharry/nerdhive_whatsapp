const {sendResponse,updateStatus} = require("./sendResponse");
const {getUserResponse} = require("./getUserResponse");
const {getBotResponses} = require("./getBotResponse");
const { getProject} = require('../services/apiCalls');
const PROJECT_NAME='KasiRentals'

const Project= getProject(PROJECT_NAME);

module.exports={
  sendResponse,
  Project,
  getBotResponses,
  getUserResponse,
  updateStatus
}