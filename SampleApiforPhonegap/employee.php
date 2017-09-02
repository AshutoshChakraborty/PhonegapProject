<?php
$name=["ashutosh","subhankar","Avik","Sankha","Souvik"];
$empcode=["001","002","003","004","005"];
$employees=array();
for ($i=0; $i < 5 ; $i++) { 
	# code...
	$object= (Object)array('name' => $name[$i],'emp_code' => $empcode[$i] );
	$employees[$i]=$object;
}





$customer_id = $_REQUEST['customer_id'];
$store_id=$_REQUEST['store_id'];

if ($customer_id==2) {
	# code...
	echo json_encode($employees);
}

?>