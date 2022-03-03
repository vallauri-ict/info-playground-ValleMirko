"use strict";

const URL = "https://maps.googleapis.com/maps/api"

let mappaId = null;
let marker = null;
$(document).ready(function(){
	// creazione dinamica del CDN di accesso alle google maps
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = URL + '/js?v=3&key='+ MAP_KEY +'&callback=documentReady';
	document.body.appendChild(script);
})	


function documentReady () {	
	let wrapper = $("#wrapper")[0];      
	let _coordinate = $("#coordinate")


	let gpsOptions = {
		enableHighAccuracy: false,
		timeout: 5000,		
		maximumAge: 0 // tempo max di presenza in cache della risposta (ms)
	}
	//Lancia la lettura continuativa
	let watchId = navigator.geolocation.watchPosition(visualizzaPosizione, errore, gpsOptions);
	//Blocca la lettura
	$('button').on('click', function(){
		navigator.geolocation.clearWatch(watchId);
	})

    /* ******************************************************************** */

	function visualizzaPosizione(position){
		let msg = `Latitudine: ${position.coords.latitude}, Longitudine: ${position.coords.longitude}
					 &plusmn; ${position.coords.accuracy} metri, Altitudine: ${position.coords.altitude}, &plusmn;${position.coords.altitudeAccuracy} metri`;
					_coordinate.html(msg);
				var currentPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					let mapOptions = {
						'center': currentPos,
						'zoom': 12
					}
					if(mappaId == null){
						let mappaId = new google.maps.Map(wrapper, mapOptions);
						let marker = new google.maps.Marker({
							position: currentPos,
							title: "Questa è la tua posizione",
							map: mappaId
						});
					}
					else{
						marker.setPosition(currentPos);
						mappaId.setCenter(currentPos);
					}
					console.log(currentPos);
				}

	function errore(err) {
		let msg = `ERRORE: ${err.code} - ${err.message}`
		_coordinate.html(msg)
	}

}

