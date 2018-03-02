$(document).ready(function() {
	$("#element").show();
	$("#otherElement").hide();
});

$("#dialer_button").click(function() { // when "button_id" is clicked
	$("#content_dialer").show(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_contact").hide();	// hide other element
	$("#content_about").hide();
});

$("#list_button").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#content_dialer").hide();	// hide other element
	$("#content_contact").hide();	// hide other element
	$("#content_about").hide();
});

$("#contact_button").click(function() { // when "button_id" is clicked
	$("#content_contact").show(); // show element
	$("#content_dialer").hide();	// hide other element
	$("#content_list").hide();	// hide other element
	$("#content_about").hide();
});
	
$("#about_this_project").click(function() { // when "button_id" is clicked
	$("#content_about").show();
	$("#content_contact").hide(); // show element
	$("#content_dialer").hide();	// hide other element
	$("#content_list").hide();	// hide other element
});
	
