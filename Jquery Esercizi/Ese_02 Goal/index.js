"use strict"

$(document).ready(function()
{	
	let _calciatore = $("#calciatore");
	let _palla = $("#palla");
	
	let btnEntra=$("#btnEntra")
	let btnEsci = $("#btnEsci")
	let btnVisualizzaPalla = $("#btnVisualizzaPalla")
	let btnNascondiPalla = $("#btnNascondiPalla")
	let btnTira = $("#btnTira")
	
	_calciatore.hide();
	_palla.hide();
	btnNascondiPalla.css("visibility", "hidden");
	btnEsci.css("visibility", "hidden");
	btnTira.css("visibility", "hidden");

	btnEntra.on("click", function(){
		_calciatore.fadeIn(2000,function(){
		btnEsci.css("visibility", "visible");
		checkTira();
		});
		btnEntra.css("visibility", "hidden");

	})	
	btnEsci.on("click", function(){
		_calciatore.fadeOut(2000,function(){
		btnEntra.css("visibility", "visible");
		});
		btnEsci.css("visibility", "hidden");
	})

	btnVisualizzaPalla.on("click", function(){
		//trasforma un puntatore java in una collezione Jquery
		$(this).css("visibility", "hidden");
		_palla.fadeIn(2000, function(){
			btnNascondiPalla.css("visibility", "visible");
			checkTira();
		})
	})
	btnNascondiPalla.on("click", function(){
		//trasforma un puntatore java in una collezione Jquery
		$(this).css("visibility", "hidden");
		_palla.fadeOut(2000, function(){
			btnVisualizzaPalla.css("visibility", "visible");
		})
		checkTira();
	})

	$("btnBianco").on("click", function () {
        _palla.prop("src", "img/palla.jpg");
    })
    $("#btnRosso").on("click", function () {
        _palla.prop("src", "img/pallaRossa.jpg");
	})
	
	function checkTira(){
		if(_calciatore.display != "none" && _palla.css("display") != "none"){
			btnTira.css("visibility", "visible");
	}
	else
	btnTira.css("visibility", "hidden");

	}
	btnTira.on("click", function () {
		btnTira.css("visibility", "hidden");
        let pos= {
            "top": "300px",
            "left": "1025px",
            "width": "50px",
            "height": "50px",
		};
		_palla.animate(pos, 1500);
    });
})