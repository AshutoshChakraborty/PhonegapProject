<?php



$customer_id = $_REQUEST['customer_id'];

if ($customer_id=="2") {
	# code...
	$general = array('title' =>"Subhankar Company" ,'email' =>"dummy@dmail.com",'logo' =>"http://192.168.0.108/Ashutosh/SampleApiforPhonegap/Images/logo.png",'email_logo' =>"http://192.168.0.108/Ashutosh/SampleApiforPhonegap/Images/logo.png",'address' =>"Lolkata",'contact' =>"0123456789" );
$subscription=array('start_datetime' => "12/02/2017 16:32",'end_datetime' => "12/12/2017 16:32",'grace_days' =>"7",'grace_day_info' =>"Please renew your licence within 7 days");
$coustom=array('banner_image' =>"http://192.168.0.108/Ashutosh/SampleApiforPhonegap/Images/bannerImage.jpg" , 'subscription' => (Object)$subscription,);
$Setting = array('general' => (Object)$general,'custom' =>(Object)$coustom );
echo json_encode($Setting);
}else{
	echo "Some error happens";
}




?>