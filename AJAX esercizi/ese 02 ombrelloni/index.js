"use strict";
const X_OFFSET = 180
const Y_OFFSET = 210;
const MMG = 24*3600*1000 // msec in un giorno
const URL = "http://localhost:3000"

$(document).ready(function(){	
		
	let _wrapper = $("#wrapper")
	let _mappa = $("#wrapper").children("div")
	let _btnVisualizzaMappa = $("#wrapper").children("button").eq(0)
	//  tag input sono NIPOTI d wrapper
	let _dataInizio = $("#wrapper").find("input").eq(0)
	let _dataFine = $("#wrapper").find("input").eq(1)
	let _msg = $("#wrapper").children("label").eq(2)

	_mappa.hide();

	_dataFine.prop("disabled", true);
	_btnVisualizzaMappa.prop("disabled", true);

	_dataInizio.on("change", function(){
		_dataFine.prop("disabled", false);
		_dataFine.prop("min", _dataInizio.val());
		_dataFine.val("");
		_btnVisualizzaMappa.prop("disabled", true).removeClass("buttonEnabled");
	})

	_dataFine.on("change", function(){
		_btnVisualizzaMappa.prop("disabled", false).addClass("buttonEnabled");
        dataFine = new Date(_dataFine.val() - new Date(_dataInizio.val()))
    	let nGiorni = Math.floor(diff /MMG)+1;
        _msg.text("Giorni richiesti: " + nGiorni);
	})
	
	_btnVisualizzaMappa.on("click", function(){
		_mappa.show();
		let request = inviaRichiesta("GET", URL+"/ombrelloni");
		request.fail(errore);
		request.done(function(){

		})
		let id = 1;
		for(let i=0; i<=18; i++){
			if(i!=9){
			for(let j=0; j<=37; j++){
				if(j!=22)
				{
					$("<div>").addClass("ombrellone")
					.css({
						"left": X_OFFSET+j*16, //-2*i
						"top": Y_OFFSET+i*16
						})
					.appendTo(_mappa).prop("id", id);
					if(isOccupato(ombrelloni[id - 1].stato))
					{
						div.addClass("red")
					}
					id++;
					}
				}
				X_OFFSET =2;
			}
		};
		$('<a>')
		.appendTo(_mappa)
		.text('Prenota')
		.addClass('button buttonEnabled prenota')
		.on('click', function(){

		})
		
	})
	

	function isOccupato(statoOmbrelloni){
        let pos1 = (dataInizio - new Date("2021-06-01"))/MMG;
        let pos2 = (dataFine - new Date("2021-06-01"))/MMG;

        for(let i=pos1; i<=pos2; i++)
        {
            if(vetStato[i]!=0)
                return true;
        }
        return false;
		}

		function ombrelloneClick(){
			if(!$(this).hasClass("blue")){
				$(this).addClass("blue");
				prenotazioni.push($(this).prop("id"));
			}
			else{
				$(this).removeClass("blue");
				let pos = prenotazioni.indexOf($(this).prop("id"));
				if(pos!=-1)
					prenotazioni.splice(pos,1);
			}
			console.log(prenotazioni);
		}
		function prenota(){
			let prenotazioneEseguita=false;
			for (const prenotazione of prenotazioni) {
				let pos1 = (dataInizio - new Date("2021-06-01"))/MMG;
        		let pos2 = (dataFine - new Date("2021-06-01"))/MMG;
				let id=prenotazione;
				for(let i=pos1; i<=pos2; i++){
					ombrelloni[id-1].stato[i]=1;
				}
				let request = inviaRichiesta('PATCH', '/ombrelloni/'+id, {'stato': ombrelloni[id-1].stato});
				request.fail(errore);
				request.done(function(){
					prenotazioneEseguita = true;
					alert("Prenotazione eseguita correttamente");
					window.location.reload();
				})
			}
		}
	
})