$(document).ready(function() {
	let clicked = false;
    var _btnAvvia = $("#btnAvvia");
	_btnAvvia.on("click", eseguiAnimazione);
 
	_btnAvvia.css("opacity", "0");
	lampeggia();

	// fuctions **********
	function  lampeggia(){
		let opacity={
			"opacity":"1"
		}
		_btnAvvia.animate(opacity, 450, function()
		{
			$(this).animate({"opacity":"0"}, 450, function(){
				if(!clicked)
					lampeggia();
			});
		});
	}

	function eseguiAnimazione(){ 
		clicked = true;
		_btnAvvia.off("click");
		_btnAvvia.css({"cursor" : "default"});
		//_btnAvvia.css("cursor" ,"default");
		$("#pedina")
		.css({left:"10px",top:"260px", width:"15px", height:"15px"})
		.animate({left:'+=60px', width:"8px", height:"8px"},'1300')
		.animate({top:'+=38px',  width:"15px", height:"15px"},'1300')
		.animate({left:'+=116px',width:"8px", height:"8px"},'1300')
		.animate({top:'+=77px',  width:"15px", height:"15px"}, '1300')
		.animate({left:'+=250px',width:"8px", height:"8px"},'1300', function(){
			clicked = false;
			_btnAvvia.css({"cursor" : "pointer"});
			_btnAvvia.on("click", eseguiAnimazione);
			lampeggia();
			$(this).css({left:"10px",top:"260px", width:"15px", height:"15px"})
		
		});
	}
	
});
