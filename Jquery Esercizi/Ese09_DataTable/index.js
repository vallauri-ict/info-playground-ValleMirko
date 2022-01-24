'use strict'
const URL = "https://randomuser.me/api"

$(document).ready(function(){	
	
	let _table = $("#wrapper").children("table");
	let url = URL + "?results=100";

	let request = $.ajax({"url":url, "dataType":"json"})
	request.fail(errore)
	request.done (function(data){	
		console.log(data)		
	});		
})






function errore(jqXHR, text_status, string_error) {
    if (jqXHR.status == 0)
        alert("Connection Refused or Server timeout");
	else if (jqXHR.status == 200)
        alert("Formato JSON non corretto : " + jqXHR.responseText);
    else
        alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
}