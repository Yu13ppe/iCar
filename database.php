<?php
	/**
	* Database Connection
	*/
	$connection = mysqli_connect(
        'localhost',
        'root',
        '',
        'carplus'
    );
    
    if(!$connection){
        die("Database Connection Failed".mysqli_error($connection));
    }
    
?>