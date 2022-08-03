const landlordNodes=[
    {
        name:'ask_province',
        flow:'landlord',
        node:'ask_province',
        actions:'saveProvince',
        uis:[
            {
                type:'interactive',
                name:'ask_province'
            },
        ],
        transitions:[
            {
                name:'ask_city',
                actions:'none',
                flow:'landlord', 
                node:'ask_city',
                catchNode:'none',
                trigger:""
            }
        ],
        catch:""

    
    },
    {
        name:'ask_city',
        flow:'landlord',
        node:'ask_city',
        actions:'saveCity',
        uis:[
            {
                type:'interactive',
                name:'ask_city'
            },
        ],
        transitions:[
            {
                name:'ask_town',
                actions:'none',
                flow:'landlord', 
                node:'ask_town',
                catchNode:'none',
                trigger:""
            }
        ],
        catch:""

    
    },
    {
        name:'ask_town',
        flow:'landlord',
        node:'ask_town',
        actions:'saveTown',
        uis:[
            {
                type:'interactive',
                name:'ask_town'
            },
        ],
        transitions:[
            {
                name:'ask_address',
                actions:'none',
                flow:'landlord', 
                node:'ask_address',
                catchNode:'none',
                trigger:""
            }
        ],
        catch:""

    
    },
    {
        name:'ask_address',
        flow:'landlord',
        node:'ask_address',
        actions:'saveAddress',
        uis:[
            {
                type:'interactive',
                name:'ask_address'
            },
        ],
        transitions:[
            {
                name:'ask_property_type',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_property_type',
                catchNode:'none',
                trigger:""
            }
        ],
        catch:""

    
    },
    {
        name:'ask_property_type',
        flow:'landlord',
        node:'ask_property_type',
        actions:'savePropertyType',
        uis:[
            {
                type:'interactive',
                name:'ask_property_type'
            },
        ],
        transitions:[
            {
                name:'ask_rooms_available',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_rooms_available',
                catchNode:'none',
                trigger:"backroom"
            },
            {
                name:'ask_bedrooms_available',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_bedrooms_available',
                catchNode:'none',
                trigger:""
            }
        ],
        catch:""

    
    },
    {
        name:'ask_rooms_available',
        flow:'landlord',
        node:'ask_rooms_available',
        actions:'saveAvailableRoomsNum',
        uis:[
            {
                type:'interactive',
                name:'ask_rooms_available'
            },
        ],
        transitions:[
            {
                name:'ask_own_bathroom_availability',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_own_bathroom_availability',
                catchNode:'none',
                trigger:""
            }
            
        ],
        catch:""

    
    },
    {
        name:'ask_bedrooms_available',
        flow:'landlord',
        node:'ask_bedrooms_available',
        actions:'saveBedroomsNum',
        uis:[
            {
                type:'interactive',
                name:'ask_bedrooms_available'
            },
        ],
        transitions:[
           
            {
                name:'ask_own_bathroom_availability',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_own_bathroom_availability',
                catchNode:'none',
                trigger:""
            }
            
        ],
        catch:""

    
    },
    {
        name:'ask_own_bathroom_availability',
        flow:'landlord',
        node:'ask_own_bathroom_availability',
        actions:'hasOwnBathroom',
        uis:[
            {
                type:'interactive',
                name:'ask_own_bathroom_availability'
            },
        ],
        transitions:[
            {
                name:'ask_shower_availability',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_shower_availability',
                catchNode:'none',
                trigger:"yes"
            },
            {
                name:'ask_parking_availability',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_parking_availability',
                catchNode:'none',
                trigger:"no"
            }
        ],
        catch:""

    
    },
    {
        name:'ask_shower_availability',
        flow:'landlord',
        node:'ask_shower_availability',
        actions:'hasShower',
        uis:[
            {
                type:'interactive',
                name:'ask_shower_availability'
            },
        ],
        transitions:[
            {
                name:'ask_parking_availability',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_parking_availability',
                catchNode:'none',
                trigger:""
            }
            
        ],
        catch:""

    
    },
    {
        name:'ask_parking_availability',
        flow:'landlord',
        node:'ask_parking_availability',
        actions:'hasParking',
        uis:[
            {
                type:'interactive',
                name:'ask_parking_availability'
            },
        ],
        transitions:[
            {
                name:'ask_rent_info',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_rent_info',
                catchNode:'none',
                trigger:""
            }
            
        ],
        catch:""

    
    },
    {
        name:'ask_rent_info',
        flow:'landlord',
        node:'ask_rent_info',
        actions:'saveRentAmount',
        uis:[
            {
                type:'interactive',
                name:'ask_rent_info'
            },
        ],
        transitions:[
            {
                name:'ask_deposit_required',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_deposit_required',
                catchNode:'none',
                trigger:""
            }
            
        ],
        catch:""

    
    },
    {
        name:'ask_deposit_required',
        flow:'landlord',
        node:'ask_deposit_required',
        actions:'depositRequired',
        uis:[
            {
                type:'interactive',
                name:'ask_deposit_required'
            },
        ],
        transitions:[
            {
                name:'ask_deposit_amount',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_deposit_amount',
                catchNode:'none',
                trigger:"yes"
            },
            {
                name:'ask_additional_info',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_additional_info',
                catchNode:'none',
                trigger:"no"
            }
            
        ],
        catch:""

    
    },
    {
        name:'ask_deposit_amount',
        flow:'landlord',
        node:'ask_deposit_amount',
        actions:'saveDepositAmount',
        uis:[
            {
                type:'interactive',
                name:'ask_deposit_amount'
            },
        ],
        transitions:[
            {
                name:'ask_additional_info',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_additional_info',
                catchNode:'none',
                trigger:""
            }
            
        ],
        catch:""

    
    },
    {
        name:'ask_additional_info',
        flow:'landlord',
        node:'ask_additional_info',
        actions:'saveAdditionalInfo',
        uis:[
            {
                type:'interactive',
                name:'ask_additional_info'
            },
        ],
        transitions:[
            {
                name:'ask_additional_info',
                actions:'savePropertyType',
                flow:'landlord', 
                node:'ask_additional_info',
                catchNode:'none',
                trigger:""
            }
            
        ],
        catch:""

    
    },
]



module.exports={
  landlordNodes
}