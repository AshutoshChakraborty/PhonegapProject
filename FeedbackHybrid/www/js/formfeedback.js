// JavaScript Document

//###################################### All Global Variable Declared here ############################################################# 
var Employees=new Array();
var mgeneral;
var mcustom;
var mySetting;
var SETTING_URL = "http://192.168.0.108/Ashutosh/SampleApiforPhonegap/settings.php";
var EMPLOYEE_URL = "http://192.168.0.108/Ashutosh/SampleApiforPhonegap/employee.php";
var FORMURL="http://192.168.0.108/Ashutosh/SampleApiforPhonegap/feedbackformdata.php"
var customer_id;
var store_id;
var campaign;
var campaign_id;
var campaign_title;
var campaign_desc;
var data=new Array();

var headerHeight = $("header").innerHeight();
var footerHeight = $("footer").innerHeight();
jQuery(".custom-height").css("padding-top", headerHeight).css("padding-bottom", footerHeight);

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
	this.location.reload(false); 
  }, 100);
});

//###################################### All Global Variable Declaration ends here ######################################################


//This function get Called When page loaded at first time
window.onload=function(){
	showdatetimepicker();
	customer_id=localStorage.getItem("cusotmer_id");
	store_id=localStorage.getItem("store_id");
	fetchAllSetting();
	fetchEmployees();
	fetchFormData();
	
}

//This function Fetch all the settings form the Settings API
function fetchAllSetting(){ 
	 SETTING_URL=SETTING_URL+"?customer_id="+customer_id;
	 $.ajax({
     url: SETTING_URL,
     type: "POST",
	 async:true,
	 cache:false,
    //contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: function (response) {
		var json=$.parseJSON(response);
        //alert(response);
		mgeneral=new General(json.general.title,json.general.email,json.general.logo,json.general.email_logo,json.general.address,json.general.contact);
		mcustom=new Custom(json.custom.banner_image,new Subscription(json.custom.start_datetime,json.custom.end_datetime,json.custom.grace_days,json.custom.grace_day_info));
		
		mySetting=new Setting(mgeneral,mcustom);
		console.log(mySetting);
		decoratepage(mySetting);
		
    },
    error: function () {
        alert("error");
    }
  });
 }
 
 //This function Fetch All the Employees list From Employee API
 function fetchEmployees(){
	 EMPLOYEE_URL=EMPLOYEE_URL+"?customer_id="+customer_id+"&store_id="+store_id;
	 $.ajax({
     url: EMPLOYEE_URL,
     type: "POST",
	 async:true,
	 cache:false,
    
    //contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: function (response) {
		var json=$.parseJSON(response);
		for (i=0;i<json.length;i++){
			 Employees[i]=new Employee(json[i].name,json[i].emp_code);
		}
		
		decorateEmployeeList(Employees);
	
		
    },
    error: function () {
        alert("error");
    }
});
}

//This Function Fetch All the Campaign data From Campaign API
function fetchFormData(){
	 FORMURL=FORMURL+"?customer_id="+customer_id+"&store_id="+store_id;
	 $.ajax({
     url: FORMURL,
     type: "POST",
	 async:true,
	 cache:false,
    
    success: function (response) {
		var json=$.parseJSON(response);
		var mcamp=json.campaign;
		campaign=new Campaign(mcamp.campaign_id,mcamp.campaign_title,mcamp.campaign_desc,mcamp.data);
		decorateForm(campaign);
		
    },
    error: function () {
        alert("error");
    }
  });
}
 
//############################### After Fetching Settings API it decorate Page accordingly ###########################################
function decoratepage(settings){
	 
	 var title=settings.getgeneral().get_title();
	 var logo=settings.getgeneral().get_logo();
	 var bannerimage=settings.getcustom().getbanner();
	 $("#bannerimage").attr("src",bannerimage);
	 $("#title").html(title);
	 $("#logo").attr("src",logo);
 }
 
 
//######################################## After Fetching Employees API it decorate employee list dialog ##############################
function decorateEmployeeList(Employees){
	for (i=0;i<Employees.length;i++){
			 $('<div id="listitem"><img src="res/image/userlogo.png" height="50px" width="50px"/><div id="name" style="float:right;align-content:center">dfdlfdljf</div></div>').prependTo("#listview");
			 var Emp=Employees[i];
			 var name=Emp.getname();
			 $("#name").text(name);
		 }
		
}

//######################################### After fetching Campaing API it decorate the Form ###########################################
function decorateForm(campaign){
	$("#campain_title").text(campaign.getcampaign_title());
	$("#campain_desc").text(campaign.getcampaign_desc());
	var d=campaign.getdata();
	for (i=0;i<d.length;i++){
		data[i]=new Data(d[i].question_type,d[i].question_id,d[i].question_title,d[i].answers);
	} 
	
	
}

function showdatetimepicker(){
	  $('#datetimepicker1').datepicker();
	 //$('#datetimepicker2').datetimepicker();
 }


//################################################################# All Pojos ##########################################################

//Setting pojo
function Setting(general,custom){
	this.general=general;
	this.custom=custom;
	
	this.getgeneral=function(){
		return this.general;
	}
	
	this.getcustom=function(){
		return this.custom;
	}
}

//Setting 1)general pojo
function General(title,email,logo,email_logo,address,contact){
	this.title=title;
	this.email=email;
	this.logo=logo;
	this.email_logo=email_logo;
	this.address=address;
	this.contact=contact;
	
	this.get_title=function(){
		return this.title;
	}
	this.get_email=function(){
		return this.email;
	}
	this.get_email_logo=function(){
		return this.email_logo;
	}
	this.get_logo=function(){
		return this.logo;
	}
	this.get_address=function(){
		return this.address;
	}
	this.get_contact=function(){
		return this.contact;
	}
}
//Setting 2)Custom pojo
function Custom(banner_image,subscription){
	this.banner_image=banner_image;
	this.subscription=subscription;
	
	this.getbanner=function(){
	return this.banner_image;
	}
	this.getsubscription=function(){
	return this.subscription=subscription;
	}
}

//Setting 2.a)Subscription
function Subscription(start_datetime,end_datetime,grace_days,grace_day_info){
	this.start_datetime=start_datetime;
	this.end_datetime=end_datetime;
	this.grace_days=grace_days;
	this.grace_day_info=grace_day_info;
	
	this.getstart_datetime=function(){
		return this.start_datetime;
	}
	this.getend_datetime=function(){
		return this.end_datetime;
	}
	this.getgrace_days=function(){
		return this.grace_day_info;
	}
	this.getgrace_day_info=function(){
		return this.grace_day_info;
	}
}



//employee pojo
 function Employee(name,emp_code){
	 this.name=name;
	 this.emp_code=emp_code;
	 this.getname=function(){
		 return this.name;
	 }
	 this.getemp_code=function(){
		 return this.emp_code;
	 }
 }
 
//Campaign pojo
function Campaign(campaign_id,campaign_title,campaign_desc,data) {
	this.campaign_id=campaign_id;
	this.campaign_title=campaign_title;
	this.campaign_desc=campaign_desc;
	this.data=data;
	
	this.getcampaign_id=function(){
		return this.campaign_id;
	}
	this.getcampaign_title=function(){
		return this.campaign_title;
	}
	this.getcampaign_desc=function(){
		return this.campaign_desc;
	}
	this.getdata=function(){
		return this.data;
	}
}

//Campaing 1)data pojo
function Data(question_type,question_id,question_title,answers){
	this.question_type=question_type;
	this.question_id=question_id;
	this.question_title=question_title;
	this.answers=answers;
	
	this.getquestion_type=function(){
		return this.question_type;
	}
	this.getquestion_id=function(){
		return this.question_id;
	}
	this.getquestion_title=function(){
		return this.question_title;
	}
	this.getanswers=function(){
		return this.answers;
	}
	
}

//Campaign 2)answers pojo
function Answers(answer_value,answer_lable){
	this.answer_value=answer_value;
	this.answer_lable=answer_lable;	
	
	this.getanswer_value=function(){
		return this.answer_value
	}
	this.getanswer_lable=function(){
		return this.answer_lable
	}
}

 
 
 
 
 