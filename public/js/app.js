var app=angular.module('myapp',[]);
var app = angular.module('myapp', ['ngRoute','ngMessages']);

app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'view/home.html',
        controller:'home_ctrl'
	});
    
	$routeProvider.when('/restaurant',{
		templateUrl:'view/restaurant.html',
     controller:'controller_restaurant'
    });
    $routeProvider.when('/signup',{
        templateUrl:'view/signup.html',
        controller:'signup_ctrl'
    })
    $routeProvider.when('/cart',{
		templateUrl:'view/cart.html',
     controller:'controller_cart'
    });
    $routeProvider.when('/add_product',{
        		templateUrl:'view/addproduct.html',
     controller:'ctrl_add_prod'
    });
    $routeProvider.when('/registration',{
        		templateUrl:'view/seller_registration.html',
     controller:'ctrl_sell_reg'
    });
    $routeProvider.when('/AddBuilding',{
        templateUrl:'view/Building_add.html',
        controller:'add_building_ctrl'
    });
	$routeProvider.otherwise({
		redirectTo:'/'
	});
});

app.run(function($rootScope){
$rootScope.element_hide=function(element){
       document.getElementById(element).classList.remove("show");
        document.getElementById(element).classList.add("hide");     
    }
    $rootScope.element_show=function(element){
        
      document.getElementById(element).classList.remove("hide");
        document.getElementById(element).classList.add("show");     
    }
    console.log("run called");
});

app.controller('home_ctrl',function($scope,$rootScope,$location){
    $scope.submit_form=function(){
         $location.path('/restaurant');
    }
    $scope.forgot_password=function(){
       console.log("Forgot Password Submitted");     
    }
    $scope.signup=function(){
       console.log("Signup Pressed");     
    }
});

app.controller('controller_restaurant',function($scope,$rootScope){
    $scope.restaurant_data=[{
        "id":"restaurant1",
        "total_items":3,
        "restaurant" : {
            "name" : "Burger King",
            "catagory" : ["south Indian","North Indian","Snacks"],
            "rating" : "5"
        },
        "products" : [{
            "product_id" : "rest1p1",
            "description" :{
                "product_name" : "Burger Crispy",
                "price" : 500
                }
            },
             {         "product_id" : "rest1p2",
            "description" :{
                "product_name" : "Burger Crispy",
                "price" : 500
                }
            },
                     {"product_id" : "rest1p3",
            "description" :{
                "product_name" : "Burger Crispy",
                "price" : 500
                }
            }]
    },
                            
    {
        "id":"restaurant2",
        "total_items":3,
        "restaurant" : {
            "name" : "Dominos",
            "catagory" : ["south Indian","North Indian","Snacks"],
            "rating" : "5"
        },
        "products" : [{
            "product_id" : "rest2p1",
            "description" :{
                "product_name" : "Burger Crispy",
                "price" : 500
                }
            },
             {         "product_id" : "rest2p2",
            "description" :{
                "product_name" : "Burger Crispy",
                "price" : 500
                }
            },
                     {"product_id" : "rest2p3",
            "description" :{
                "product_name" : "Burger Crispy",
                "price" : 500
                }
            }]
    },
                             {
        "id":"restaurant3",
        "total_items":3,
        "restaurant" : {
            "name" : "Domi",
            "catagory" : ["south Indian","North Indian","Snacks"],
            "rating" : "5"
        },
        "products" : [{
            "product_id" : "rest3p1",
            "description" :{
                "product_name" : "Burger Crispy",
                "price" : 500
                }
            },
             {         "product_id" : "rest3p2",
            "description" :{
                "product_name" : "Burger Crispy",
                "price" : 500
                }
            },
                     {"product_id" : "rest3p3",
            "description" :{
                "product_name" : "Burger Crispy",
                "price" : 500
                }
            }]
    }
    ];     
    
    $scope.side_open = function(){
        document.getElementById('collapse').classList.remove("sidebar-hide");
        document.getElementById('collapse').classList.add("sidebar-show");  
        document.getElementById('overlay').style.display="block";
}
    
    $scope.side_close = function(){
        document.getElementById('collapse').classList.add("sidebar-hide");
        document.getElementById('collapse').classList.remove("sidebar-show");   
        document.getElementById('overlay').style.display="none";
        
    }

    $scope.products_show=function(element){
        var a=document.querySelectorAll('.restaurant-products');
        a.forEach(function(el){
            if(document.getElementById(el.id)==document.getElementById(element.id)){
                 if(document.getElementById(element.id).classList.contains("show"))
            {
                $rootScope.element_hide(element.id);
            }
        else if(document.getElementById(element.id).classList.contains("hide"))
            {
        $rootScope.element_show(element.id);
            }
            }
            else if(document.getElementById(el.id).classList.contains("show"))
            {
                $rootScope.element_hide(el.id);
            }
        });
        
       
    }
    
});
app.controller('controller_cart',function(){
    
});
app.controller("ctrl_add_prod",function(){
    
});
app.controller('add_building_ctrl',function($scope,$http,$location) {
    console.log("Controller called"); 
    $scope.submitform=function(){
       console.log("Submit Called Add Buiding");
          $http({
			url:'/addNewBuilding',
			data:$scope.Restaurant,
			method:'POST'
		}).then(function(response){
              console.log(response);
			if(response.data.success){
				alert('Building Successfully Added');
                 $location.path('/');
			}else{
				alert(response.data.error);
			}
		},function(response){
			console.log(response);
			alert('Something went wrong!');
              $location.path('/');
		}); 
       console.log("Form Submitted");
      
     }

    
});
app.controller('signup_ctrl',function($http,$scope){
    $scope.submitform=function(){
        $http({
            url:'/Registration',
            method:'post',
            data:$scope.Restaurant
        }).then(function(response){
            
        },function(response){
            
        });
    } //end of function
    
});