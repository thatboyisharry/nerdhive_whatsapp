const onboardingNodes=[
    {
        name:'start',
        node:'start',
        flow:'onboarding',
        actions:[],
        uis:[
            {
                type:'text',
                name:'start'
            },
            {
                type:'text',
                name:'askName'
            }
        ],
        transitions:[
            {
                name:'landlord_or_renter',
                actions:'none',
                flow:'onboarding', 
                node:'landlord_or_renter',
                catchNode:'none',
                triger:""
            }
        ],
        catch:""

    },
    ///////////////////////////////
    {
        name:'landlord_or_renter',
        flow:'onboarding',
        node:'landlord_or_renter',
        actions:[{name:'saveProvince',trigger:'',flow:'landlord'}],
        uis:[{
            type:'interactive',
            name:"landlord_or_renter"
        }],
        transitions:[
            {
                name:'ask_province',
                node:'ask_province',
                function:'isLandlord',
                flow:'landlord', 
                catchNode:'none',
                trigger:'landlord'
            },
            {
                name:'ask_province',
                node:'ask_province',
                function:'isRenter',
                flow:'tenant',
                catchNode:'none',
                trigger:'renter'
            }
        ],
        catch:""
    },
   
]
 
module.exports={
  onboardingNodes
}