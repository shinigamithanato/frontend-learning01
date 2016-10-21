 var algo;
/*
 $(document).ready(function(){
	$.ajax({
		dataType: "JSON",
		url: "http://127.0.0.1/ServerTESTS/cincoalamildos/astronomy.php",
		type: "GET",
		success: function(data){
			var i=0;
			while(data.astronomyInfoID[i]!=null){
				 var astronomyInfoID=data.astronomyInfoID[i];
				 var imageInfo=data.imageInfo[i];
				 var imageTittle=data.imageTittle[i];
				 var imageurl=data.imageurl[i];
				 
				 //alert("correcto:" +data.astronomyInfoID[i]);
				 //$('#sipnosisBlock').text(data.imageInfo[i]);//pone texto en u elemento, en este caso un parrofo
				 //$('#tittleBlock').text(data.imageTittle[i]);
				 //$("#imageBlock").attr("src",data.imageurl[i]);
				 i++;
				
				angular.element('#newcontainer').scope().agregarlista(astronomyInfoID,imageInfo,imageTittle,imageurl);
			}
			//$("#pruebacontroladir").attr("ng-repeat","astronomydataa in astronomydata");//ng-init
			//$("#pruebaindex").text("{{algo}}");
		   //$("#inserthtmlexterno").load("test.html");
		}, 
		error: function(error){
			alert("error:" + error);
			$('#sipnosisBlock').text(error);//pone texto en u elemento, en este caso un parrofo
		}
	});
	
});
 * */


function controladorAstronomyList($scope,$http){
	$scope.astronomydata=[{
		astronomyInfoID: -1,
		imageInfo: "",
		imageTittle: "",
		imageurl: "",
		imagenewurls: ""
	}];
	$scope.repeatlimit=10;
	
	
	$scope.returnlimit=function(){
		return $scope.repeatlimit;
	};
	
	$scope.addlmit=function(){
		$scope.repeatlimit=$scope.repeatlimit+10;
	};
	
	$scope.getinfo=function(){
		$http.get("http://127.0.0.1/ServerTESTS/cincoalamildos/astronomy.php").then(function(response){
			$scope.astronomydata=response.data.data;
		});
	};
	
	$scope.agregarlista=function(astronomyInfoID,imageInfo,imageTittle,imageurl){
		//alert("hola mundo");
		$scope.astronomydata.push({
			astronomyInfoID:	astronomyInfoID,
			imageInfo: 			imageInfo,
			imageTittle:		imageTittle,
			imageurl:			imageurl
		});
	};
	
};
