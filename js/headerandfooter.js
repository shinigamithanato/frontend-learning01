(function() {
  var app=angular.module("indexController",[]);
  
  app.directive("header_estabdar",function(){
  	return{
  		restrict: "E",
  		templateUrl: "..//header_estandar.html"
  	}
  });
  
  app.controller("footer_estandar",function(){
  	return{
  		restrict: "E",
  		templateUrl: "..//footer_estandar.html"
  	}
  });
  

   
});

function controlarClikmenu($scope){
	$scope.menuStatus=0;//0 hide/1 show menu
	
	$scope.showHiddenMenu=function(canShow){
		if(canShow===0){
			$scope.menuStatus=1;
		} else{
			$scope.menuStatus=0;
		}	
	};
	
	$scope.returnmenuStatus=function(){
		return $scope.menuStatus;
	};
};
