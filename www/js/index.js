document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
	console.log("Device Ready...");
	
}

/*$('input[data-type=search]').live("focus", function() {
        $("[data-role=header]").css('position','fixed');
        $("[data-role=footer]").css('position','fixed');
    });
*/
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

 $(document).ready(function(){
      $('#datetimepicker1').datepicker();
	 $('#datetimepicker2').datetimepicker();
	 
            });
