const {ask_property_type,ask_province,ask_city,ask_town,ask_address,ask_bedrooms_available,ask_rooms_available,ask_parking_availability,ask_own_bathroom_availability,ask_shower_availability,ask_rent_info,ask_deposit_required,ask_deposit_amount,ask_additional_info } = require("./ui")
const { landlordNodes } = require ("./nodes")


let image={
  name:'send_image',
}


 const landlordFlow={
    name:'landlord',
    user_interfaces:[
        ask_property_type,
        ask_province,
        ask_city,
        ask_town,
        ask_address,
        ask_rooms_available,
        ask_bedrooms_available,
        ask_parking_availability,
        ask_own_bathroom_availability,
        ask_shower_availability,
        ask_rent_info,
        ask_deposit_required,
        ask_deposit_amount,
        ask_additional_info,
       
    ],
    nodes:landlordNodes

    
    
}
 
module.exports={
  landlordFlow
}