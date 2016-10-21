<?php
    	$pruebas="hola;";
	// Only process POST reqeusts
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		echo "Hola";
		echo "<p>string</p>";
		
		$pruena	  ="esto es una prueba";
		$nombre   =	$_POST["message"];
		$mailUser = $_POST["mail"];
		$message  = $_POST["message"];
		
		 if (!filter_var($mailUser, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }
		
		$messageToSend=$nombre.$mailUser.$message;
		// use wordwrap() if lines are longer than 70 characters
		$message = wordwrap($messageToSend,70);
		
		if(mail("carlos.zaletas@uabc.edu.mx","Contacto de 5 a la 1002",$messageToSend)){
			// Set a 200 (okay) response code.	
			http_response_code(200);
            echo "Thank You! Your message has been sent.";
		}else{
			http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
		}
		
	}else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
	print phpinfo();  
?>