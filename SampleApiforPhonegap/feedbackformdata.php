<?php

$json='{	
	"campaign":{
		  "campaign_id" : "21",
         		 "campaign_title" : "Diwali Bumper",
         		 "campaign_desc" : "lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text",
         		 "data":[{
          		 "question_type": "multiple_type",
          		 "question_id":"1",
          		 "question_title":"lorem ipsum is a dummy text",
          		 "answers":[{
			                   "answer_value":"1",
			                   "answer_lable":"Yes"
                        },{
			                   "answer_value":"2",
			                   "answer_lable":"No"
                        },{
			                   "answer_value":"3",
			                   "answer_lable":"both"
                        },{
			                   "answer_value":"4",
			                   "answer_lable":"maybe"
                        }]
              },{
          		 "question_type": "single_type",
          		 "question_id":"2",
          		 "question_title":"lorem ipsum is a dummy text in single type",
          		 "answers":[{
			                   "answer_value":"1",
			                   "answer_lable":"Yes"
                        },{
			                   "answer_value":"2",
			                   "answer_lable":"No"
                        },{
			                   "answer_value":"3",
			                   "answer_lable":"both"
                        },{
			                   "answer_value":"4",
			                   "answer_lable":"maybe"
                        }]
              },{
          		 "question_type": "Single_row_text",
          		 "question_id":"3",
          		 "question_title":"This is an example of Single_row_text",
          		 "answers":[]
              },{
          		 "question_type": "comment_ box",
          		 "question_id":"4",
          		 "question_title":"This is a comment box examaple",
          		 "answers":[]
              },{
          		 "question_type": "numeric",
          		 "question_id":"5",
          		 "question_title":"This is a numeric type example",
          		 "answers":[]
              },
              {
          		 "question_type": "email_address",
          		 "question_id":"6",
          		 "question_title":"This is a email address example",
          		 "answers":[]
              },
              {
          		 "question_type": "datepicker",
          		 "question_id":"7",
          		 "question_title":"This is a datepicker example",
          		 "answers":[]
              },
              {
          		 "question_type": "date_timepicker",
          		 "question_id":"8",
          		 "question_title":"This is a date_time_picker example",
          		 "answers":[]
              }
              
              
              ]	      
	}
}

';

$customer_id = $_REQUEST['customer_id'];
$store_id=$_REQUEST['store_id'];

if ($customer_id==2) {
	# code...
	echo $json;
}
?>