var express = require('express');
var Restaurant_apis = express.Router();
var mongoose = require('mongoose');
//var Resturant = require('../models/Restaurant_data');
var Restaurant = require('../models/restaurant_schema.js');
var Restid,Prod_id1;
var create_id=function(req){
   var date=new Date().toISOString();
    Restid="Rest"+date.substring(8,10)+date.substring(5,7)+date.substring(2,4)+date.substring(11,13)+date.substring(14,16)+date.substring(17,19)+req.body.Restaurant_Name;
    console.log(id);
    return Restid;
    
}
var create_prod_id=function(req){
 Prod_id1="Prod"+date.substring(8,10)+date.substring(5,7)+date.substring(2,4)+date.substring(11,13)+date.substring(14,16)+date.substring(17,19)+req.body.Restaurant_Name;
    console.log(id);
    return Prod_id1;   
}
Restaurant_apis.post('/Registration',function(req,res){
    if (req.body.Rest_id) {
Restaurant.update({Restaurant_Id:req.body.Rest_id}, {$push: { Product : {product_name: req.body.product_name, product_price: req.body.product_price, product_tax: req.body.product_tax,product_status:req.body.product_status} } }, function(err, data) {
        if (err) res.status(500).json({
            success: false,
            msg: "Database error"
        })

        else {
            res.json({
                success: true,
                data:data
            })
        }
    })

}
    else{
        res.json({
            success:false,
            msg:'Building_name Not present'
        })
    }
 
  
});

Restaurant_apis.post('/addNewBuilding',function(req,res){
    console.log("Called Add Building");
    console.log(req.body);
   if(req.body.Restaurant_Name){
       var newRestaurant=Restaurant({
           Restaurant_Name:req.body.Restaurant_Name,
           Restaurant_Owner:req.body.Restaurant_Owner,
           Restaurant_Phone:req.body.Restaurant_Phone,
           Restaurant_email:req.body.Restaurant_email,
           Restaurant_Status:req.body.Restaurant_Status,           
           Restaurant_Id:create_id(req),
           Restaurant_Timings:{
                        from:req.body.from,
                        to:req.body.to
           },
           Restaurant_Address: {    
                    Address:req.body.Address,
                    Pincode:req.body.pincode,
                    Area:req.body.Area,
                    City:req.body.city,
                    State:req.body.State
       }
           
       });
       console.log("Restaurant Data"+newRestaurant);
       
       
       newRestaurant.save(function(err, data) {
      if (err) {
        res.json({ success: false })
      }
      res.json({
        success: true,
        data: data
      })
    })

   }
    else{
        res.json({
            success:false,
            msg:'Data Incomplete'
        })
    }
});

Restaurant_apis.post('/addItem',function(req,res){
    console.log(req);
    if(req.body.Rest_id){
        var rest = { 
            'Products' : {
                product_name: req.body.Product_name, 
                product_tax: req.body.product_tax,  
                product_status: req.body.product_status, 
                product_price:req.body.Product_price
               // product_catagory:req.body.product_catagory;
            }
        }    
        Restaurant.update({
           Restaurant_Id:req.body.Rest_id
        }, {$push: rest},{ upsert: true }, function(err, data) {
        if (err) {res.status(500).json({
            success: false,
            msg: "Database error",
            error:err
        })}
            else{
                res.json({
                success:true,
                data:data     
                })
               
            }
        
    })
    }
                        else{
        res.json({
            success:false,
            msg:'Restaurant Id Not Entered'
        })
    }
})

module.exports=Restaurant_apis;