<?php 
$response=array('err_type'=>'1','customer_id'=>'2','store_id'=>'3');
$imei = $_REQUEST['imei'];

if ($imei =="123456789") {
	echo json_encode($response);
}else{

	echo "false";
}

 ?>