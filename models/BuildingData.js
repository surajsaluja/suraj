var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BuildingSchema=new Schema({
    Building_Name:{
        type:String,
        Required: 'Required to link Tasks'
    },
    Building_Id:{
        type:String,
        Required:'Required Building Id'
    },
    Building_Address: {
    
    Street:{
        type: String,
        Required: 'Kindly enter the street'
        },
        Pincode:{
        type: String,
        Required: 'Kindly enter the street'
        },
        Area:{
        type:String,
        Required: 'Kindly Add Area'
        },
        City:{
        type:String,
        Required: 'Kindly Add City'
        },
        State:{
        type:String,
        Required: 'Kindly Add State'
        }
    },
    
    Restaurants:[{
        Restaurant_Id:{
          type:String,
            Required:'Can Not Get Restaurant_id'
        },
        phone:{
        type:String,
        Required: 'Required to link Tasks'
    },
    name: {
        type: String,
        Required: 'Kindly enter the name of the task'
    },
    created_date:{
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'pending'
    },
        
        Products:[{
            product_name:{
                type: String,
        Required: 'Kindly enter the name of the task'
                        },
            product_price:{
                type: String,
        Required: 'Kindly enter the price of the task'
            },
            product_tax:{
                type: String,
        Required: 'Kindly enter the tax of the product'
            },
            product_status:{
                type: String,
                default:'available'
            }
        }]
    }],
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'active'
    }
});
module.exports=mongoose.model('Building',BuildingSchema);