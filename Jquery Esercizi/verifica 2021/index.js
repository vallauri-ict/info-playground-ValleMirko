"use strict";

const RIGHE = 5
const COLONNE = 14
const x0 = 32
const y0 = 11
   
var vet=[];
let win=0;
let punti = 36;
   
$(document).ready(function(){
        
	let tappeto=$("#mainFrame>div")
	let imgRoulette=$("#mainFrame>img") 
	let numRoulette=$("#mainFrame>span")
	let puntiLabel = $("#leftFrame p")

let cont = 0;
	for(let i=0; i< RIGHE;i++){
		for(let i=0; i< COLONNE;i++){
			let item = json[cont]
			$("<div>").addClass("casella").appendTo(tappeto)
			.prop("item", item)
			.css({
				"top": y0+(i*53),
				"left": x0+(j*53)
			})
			if(item.win !=0){
				div.on("click", visualizzaFiches);
			}
			cont++;
		}
	}
	function visualizzaFiches(){
		if($(this).children().length == 0){
			$("<div>").addClass("fiche").appendTo($(this));
			vet.push($(this).prop("item"));
			punti--;
			puntiLabel.html(punti);
		if(punti == 0){
				tappeto.children().off("click");
			}
		}
		else{
			//alert("Cella Occupata");
			$(this).children().remove();
			punti++;
			puntiLabel.html(punti);
			vet.indexOf($(this).prop("item"));
			vet.splice(index, 1);
		}
	}

	$("leftFrame").children("button").on("click", function(){
		imgRoulette.prop("src", "img/rouletteMov.gif");
		setTimeout(controllaVincita, 3000);
	})

	function controllaVincita(){
		win=0;
		imgRoulette.prop("src", "img/roulette.gif");
		let numero = generaNumero(0, 36);

		for(let i=4; i<0; i--){
			numRoulette.eq(i).html(numRoulette.eq(i-1).html());
			numRoulette.eq(4).css("background-color", numRoulette.eq(i-1).css("background-color"));

		}
		numRoulette.eq(0).html(numero);

		for (const item of json) {
			if(item.numbers[0] == numero){
				color = item.color;
				break;
			}
		}
		numRoulette.eq(0).css("background-color", color);
		
		for (const item of vet) {
			if (item.numbers.includes(numero)) {
				win+=item.win;
			}
			else{
				let id = item.id;
				tappeto.children("div").eq(id).children().remove();
			}
		}
		setTimeout(function(){
			alert("HAI VINTO" +win.toString()+"fiches");
			punti+=win;
			puntiLabel.html(punti);
			tappeto.children("div").children().remove();
			vet=[];
		}, 300);
	}

	function generaNumero(a, b){
		return Math.floor((b-a+1)*Math.random())+a;
	}
})

