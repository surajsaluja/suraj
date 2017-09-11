var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Restaurant_schema=new Schema({
   Restaurant_Id:{
       type:String,
       required:'Restaurant_Id Required'
   },
    Restaurant_Name:{
       type:String,
       required:'Restaurant Name Required'
    },
    Restaurant_Owner:{
            type: String,
            Required: 'Kindly enter the Owner'
        
    },
    Restaurant_Phone:{
        type: String,
            Required: 'Kindly enter the Phone Number'

    },
    Restaurant_email:{
        type: String,
            Required: 'Kindly enter the email address'
    },
    Restaurant_Status:{
        type: String,
        default:'open'
    },
    Restaurant_Timings:{
        from:{
          type:String,
            Required:'Plese Enter Approx Opening Time'
        },
        to:{
            type:String,
            Required:'Plese Enter Approx Closing Time'
        }
    },
   Restaurant_Address: {

        Address: {
            type: String,
            Required: 'Kindly enter the street'
        },
        Pincode: {
            type: String,
            Required: 'Kindly enter the street'
        },
        Area: {
            type: String,
            Required: 'Kindly Add Area'
        },
        City: {
            type: String,
            Required: 'Kindly Add City'
        },
        State: {
            type: String,
            Required: 'Kindly Add State'
        }
    },
    Products: [{
            product_name: {
                type: String,
                Required: 'Kindly enter the name of the task'
            },
            product_price: {
                type: String,
                Required: 'Kindly enter the price of the task'
            },
            product_tax: {
                type: String,
                Required: 'Kindly enter the tax of the product'
            },
            product_status: {
                type: String,
                default: 'available'
            },
        product_catagory:[{
                
        }]
        }]
    
});
module.exports=mongoose.model('Restaurant_Data',Restaurant_schema);