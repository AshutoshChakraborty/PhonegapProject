var URL="http://192.168.0.108/Ashutosh/SampleApiforPhonegap/login.php";
var imei="123456789";

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady(){
	console.log("Device Ready...");
	installation(imei);
	
}

/*$('input[data-type=search]').live("focus", function() {
        $("[data-role=header]").css('position','fixed');
        $("[data-role=footer]").css('position','fixed');
    });
*/


 /*$(document).ready(function(){
      $('#datetimepicker1').datepicker();
	 $('#datetimepicker2').datetimepicker();
	 
            });*/
function installation(imei){
	 URL=URL+"?imei="+imei;
	 $.ajax({
     url: URL,
     type: "POST",
	 async:true,
	 cache:false,
    
    //contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: function (response) {
		var json=$.parseJSON(response);
        if (json.err_type=="1"){
			//fetchAllSetting(json.customer_id);
			localStorage.setItem("cusotmer_id", json.customer_id);
			localStorage.setItem("store_id",json.store_id);
			sendtonextpage();
		}
    },
    error: function () {
        alert("error");
    }
}); 
 }
 
 function sendtonextpage(){
	 window.location='bak-index.html';
 }
 

 
 
 
 
