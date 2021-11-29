<?php

$Email=$_POST['Email'];
$username=$_POST['username'];
$password1=$_POST['password1'];


$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(email , username, password) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $Email, $username, $password1);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
?>