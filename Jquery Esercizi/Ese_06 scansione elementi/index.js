'use strict'
let wrapper;

function evidenzia(selector){
	wrapper.children().css("background-color", "white"); 
	wrapper.children(selector).css("background-color", "yellow");
	$("#wrapper "+selector).css("background-color", "yellow");
}


$(document).ready(function(){	
	wrapper = $("#wrapper");

	$("#btn1").on("click", function(){
		alert(wrapper.children().length);
	})

	$("#btn2").on("click", function(){
		let string=" ";
		for(const[i,item] of wrapper.children().toArray().entries()){
			string+=" "+$(item).text();
		}
		alert(string);
	})

	$('#btn3').on("click", function(){
		wrapper.children("li:nth-of-type(even)").css("background-color", "yellow");
		//wrapper.children().filter("li:nth-of-type(even)").css("background-color", "yellow");

	})

	$('#btn4').on("click", function(){
		wrapper.children("nth-of-type(odd)").each(function(i, ref){
			let color=`rgb(0, ${50*(i+1)}, 0)`; 
			$(this).css("color", color);
		})
	})
	


})