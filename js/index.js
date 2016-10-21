(function() {
  var app=angular.module("indexController",[]);
  
  app.directive("header_estabdar",function(){
  	return{
  		restrict: "E",
  		templateUrl: "..//header_estandar.html"
  	}
  });
  
  app.directive("footer_estandar",function(){
  	return{
  		restrict: "E",
  		templateUrl: "..//footer_estandar.html"
  	}
  });
  
  
});
/*
function GalleryController($scope){
  	$scope.textos=[{texto: "hola"}];//<div ng-controller="GalleryController as gallery">{{textos[0].texto}}</div>
}*/

$(document).ready(function(){
		//alert("hola mind");
});
