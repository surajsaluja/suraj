var express = require('express');
var Restaurant_apis = express.Router();
var mongoose = require('mongoose');
var Resturant = require('../models/Restaurant_data');
var Building = require('../models/BuildingData');
var id;
var create_id=function(req){
   var date=new Date().toISOString();
    var id="Rest"+date.substring(8,10)+date.substring(5,7)+date.substring(2,4)+date.substring(11,13)+date.substring(14,16)+date.substring(17,19)+req.body.building_name;
    return id;
}
Restaurant_apis.post('/Registration',function(req,res){
    if (req.body.building_name) {
    
Building.update({Building_Name:req.body.building_name}, {$push: { Restaurants : {phone: req.body.rest_phone, name: req.body.rest_name, status: req.body.rest_status,Restaurant_Id:create_id(req)} } },{ upsert: true }, function(err, data) {
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
   if(req.body.building_name){
       var newBuilding=Building({
           Building_Name:req.body.building_name,
           Building_Id:req.body.building_id,
           Building_Address: {    
                    Street:req.body.street,
                    Pincode:req.body.pincode,
                    Area:req.body.Area,
                    City:req.body.city,
                    State:req.body.State
       }
       });
       newBuilding.save(function(err, data) {
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
    if(req.body.rest_id){

        Building.update({Restaurants:{Restaurant_Id:req.body.rest_id,}}, {$push: { Products : {product_name: req.body.prod_name, product_tax: req.body.prod_tax,  product_status: req.body.prod_status, product_price:req.body.price} } },{ upsert: true }, function(err, data) {
        if (err) res.status(500).json({
            success: false,
            msg: "Database error",
            error:err
        })
        
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