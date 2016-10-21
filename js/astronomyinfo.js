
var urldisplay=window.location.search;//obtetiene el urls del actuual pagina apartir del caracter: "?"
var searchdates=urldisplay.split("?");
var querydatos= searchdates[1].split("=");

var infoTittle=querydatos[0];
var infoTittleFromUrl=querydatos[1];

console.log(infoTittle);
console.log(infoTittleFromUrl);

$(document).ready(function(){
	$.ajax({
		dataType: "JSON",
		url: "http://127.0.0.1/ServerTESTS/cincoalamildos/astronomynews.php",
		type: "POST",
		data: {
			infoTittle: infoTittle,
			infoTittleFromUrl: infoTittleFromUrl
		},
		success: function(jsondata){
			$("#tittle").text(jsondata.imageTittle);
			$("#image").attr("src",jsondata.imageurl);
			$("#info").text(jsondata.imageInfo);
		},
		error: function(jsondata){
			$("#tittle").text("Error 404 NOt FOUND");
			$("#image").attr("src","");
			$("#info").text("");
		}
	});
	
});
