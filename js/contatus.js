$(document).ready(function(){
	//var boton=$('#submitButton').val();
	
	//$("#contactForm").ajaxForm();
	
	$("#contactForm").submit(function() {
		
		var message=$("#inputMessage").val();
		var name=$("#inputName").val();
		var mail=$("#inputMail").val();
		
		
		
		$.ajax({
			dataType: "JSON",
			type: "POST",
			url: "http://127.0.0.1/ServerTESTS/cincoalamildos/contatus.php",
			data: {
				message: message,
				name: name,
				mail: mail
			},
			success: function(result){
				alert("Dato enviados, agradecemos tus sugerencias "+result.exito);
			}, 
			error: function(result){
				alert("Ocurrio un problema: "+result.errorr);
			}
		});	
		return false;
	});
	//alert("yolo");
});


