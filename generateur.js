$(document).ready(function(){

   		var Htmloptions = $('#htmlSelction option');

   		var eventsOptions = $('#eventSelction option');
	   	
   		//In this event we launch the event to generate html,js and css.
	    $('#generate').click(function(){
	   		//get the selected html tag 
	   		var selectedHtml= $('#htmlSelction').find(":selected").text();
	   		//get the selected event 
	   		var selectedEvent= $('#eventSelction').find(":selected").text();

	   		//loop over html select and get selected tag.	
	   		switch (selectedHtml) {
			  case 'text':
			    if ($('#cssSelection').val()!='') {
	   				$('#htmlCode').text("<input type='text' class='"+$('#cssSelection').val()+"'>");
	   			}else{
	   				$('#htmlCode').text("<input type='text'>");
	   			}
			    break;
			  case 'number':
			    if ($('#cssSelection').val()!='') {
	   				$('#htmlCode').text("<input type='number' class='"+$('#cssSelection').val()+"'>");
	   			}else{
	   				$('#htmlCode').text("<input type='number'>");
	   			}
			    break;
			  case 'email':
			    if ($('#cssSelection').val()!='') {
	   				$('#htmlCode').text("<input type='email' class='"+$('#cssSelection').val()+"'>");
	   			}else{
	   				$('#htmlCode').text("<input type='email'>");
	   			}
			    break;
			  case 'textarea':
			    if ($('#cssSelection').val()!='') {
	   				$('#htmlCode').text("<textarea  class='"+$('#cssSelection').val()+"'></textarea>");
	   			}else{
	   				$('#htmlCode').text("<textarea></textarea>");
	   			}
			    break;
			  case 'radio':
			  if ($('#cssSelection').val()!='') {
	   				$('#htmlCode').text("<input type='radio' class='"+$('#cssSelection').val()+"'>");
	   			}else{
	   				$('#htmlCode').text("<input type='radio'>");
	   			}
			    break;
			  case 'select':
			   if ($('#cssSelection').val()!='') {
	   				$('#htmlCode').text("<select  class='"+$('#cssSelection').val()+"'><option>your option</option></select>");
	   			}else{
	   				$('#htmlCode').text("<select><option>your option</option></select>");
	   			}
			    break;
			     case 'img':
			  if ($('#cssSelection').val()!='') {
	   				$('#htmlCode').text("<img src='' class='"+$('#cssSelection').val()+"'>");
	   			}else{
	   				$('#htmlCode').text("<img src=''>");
	   			}
			    break;
			     case 'a':
			  if ($('#cssSelection').val()!='') {
	   				$('#htmlCode').text("<a href='' class='"+$('#cssSelection').val()+"'></a>");
	   			}else{
	   				$('#htmlCode').text("<a href=''></a>");
	   			}
			    break;
			     case 'button':
			  if ($('#cssSelection').val()!='') {
	   				$('#htmlCode').text("<button  class='"+$('#cssSelection').val()+"'></button>");
	   			}else{
	   				$('#htmlCode').text("<button></button>");
	   			}
			    break;
			  default:
			    $('#htmlCode').text("your tag should be generated here!");
				}


			//loop over events select and get selected events .		

				switch (selectedEvent) {
			  case 'hover':
			    if ($('#cssSelection').val()!='') {
	   				$('#eventCode').text("$('."+$('#cssSelection').val()+"').hover(function() {console.log( 'Handler for .hover() called.' );});" );
	   			}else{
	   				$('#eventCode').text("$('"+selectedHtml+"').hover(function() {console.log( 'Handler for .hover() called.' );});");
	   			}
			    break;
			    case 'click':
			    if ($('#cssSelection').val()!='') {
	   				$('#eventCode').text("$('."+$('#cssSelection').val()+"').click(function() {console.log( 'Handler for .click() called.' );});");
	   			}else{
	   				$('#eventCode').text("$('"+selectedHtml+"').click(function() {console.log( 'Handler for .click() called.' );});");
	   			}
			    break;
			    case 'mouseenter':
			    if ($('#cssSelection').val()!='') {
	   			$('#eventCode').text("$('."+$('#cssSelection').val()+"').mouseenter(function() {console.log( 'Handler for .mouseenter() called.' );});");
	   			}else{
	   				$('#eventCode').text("$('"+selectedHtml+"').mouseenter(function() {console.log( 'Handler for .mouseenter() called.' );});");
	   			}
			    break;
			    case 'keypress':
			    if ($('#cssSelection').val()!='') {
	   				$('#eventCode').text("$('."+$('#cssSelection').val()+"').keypress(function() {console.log( 'Handler for .keypress() called.' );});" );
	   			}else{
	   				$('#eventCode').text("$('"+selectedHtml+"').keypress(function() {console.log( 'Handler for .keypress() called.' );});");
	   			}
			    break;
			    case 'change':
			    if ($('#cssSelection').val()!='') {
	   				$('#eventCode').text("$('."+$('#cssSelection').val()+"').change(function() {console.log( 'Handler for .change() called.' );});" );
	   			}else{
	   				$('#eventCode').text("$('"+selectedHtml+"').change(function() {console.log( 'Handler for .change() called.' );});");
	   			}
			    break;
			  
			  default:
			    $('#eventCode').text("your event should be generated here!");
				}


				// check to add the Css Class .
				if ($('#cssSelection').val()!='') 
				{
				$('#cssCode').text("."+$('#cssSelection').val()+"{ your properties }");
				}



	   		

	   });




});


