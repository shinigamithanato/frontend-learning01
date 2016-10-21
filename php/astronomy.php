<?php
    header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header('Content-Type: application/json');
	
?>
<?php

	$servidor="";
	$usuario="";
	$password=""; //user, server, and password are in the server
	$bd="cincalamildos";
	$conexion = mysqli_connect($servidor, $usuario, $password, $bd); 
	
	$jsondata = array();
	
	if (mysqli_connect_error()) {
	$jsondata["error"]="EROR n la conexión con la basede datos"; 

    //exit; //("Error: No se pudo realizar la conexion"); 	
	}
	else{
		$jsondata['data']="conexxion realcida";
	}
		
	echo json_encode($jsondata);
	exit;
		
	
	
?>
