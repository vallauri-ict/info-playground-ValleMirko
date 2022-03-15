﻿"use strict";

const URL = "https://maps.googleapis.com/maps/api"

$(document).ready(function () {
	// creazione dinamica del CDN di accesso alle google maps
	//per non mettere la chiave dentro HTML
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = URL + '/js?v=3&key=' + MAP_KEY + '&callback=documentReady';
	document.body.appendChild(script);
})


function documentReady() {
	let header = $("#header")
	let wrapper = $("#wrapper")
	let divMap = wrapper.children(".map")[0]     // js
	let panel = wrapper.children(".panel")[0]   // js
	let msg = wrapper.children(".msg")

	$('input[type=button]').on('click', function () {
		let partenza = $('input[type=text]').eq(0).val();
		let arrivo = header.find('input').eq(1).val();

		let directionsService = new google.maps.DirectionsService();
		let routesOptions = {
			origin: partenza,
			destination: arrivo,
			travelMode: google.maps.TravelMode.DRIVING, // default
			provideRouteAlternatives: false, // default=false
			avoidTolls: false, // default (pedaggi)
		};

		let renderOptions = {
			polylineOptions: {
				strokeColor: "#44F", // colore del percorso
				strokeWeight: 6, // spessore
				zIndex: 100 // posizionamento
			}
		}
		let directionRenderer = new google.maps.DirectionsRenderer(renderOptions);

		//Soluzione con promise --> senza callBack
		let promise = directionsService.route(routesOptions)
		promise.then(function (directionsRoutes) {
			let mapOptions = {
				/*'zoom': 15,
				'mapTypeId': google.maps.MapTypeId.ROADMAP*/
			};
			let mappa = new google.maps.Map(divMap, mapOptions);
			if (directionsRoutes.status == google.maps.DirectionsStatus.OK){
				console.log(directionsRoutes.routes[0])
				directionRenderer.setMap(mappa);
				//directionRenderer.setRouteIndex(0);
				directionRenderer.setDirections(directionsRoutes);
				//prima di scrivere nel panel bisogna sempre cancellare prima il contenuto
				panel.innerHTML = "";
				directionRenderer.setPanel(panel);
				let distanza = directionsRoutes.routes[0].legs[0].distance.text;
				let tempo = directionsRoutes.routes[0].legs[0].duration.text;
				msg.html(`Distanza: <b>${distanza}</b><br>
				Tempo di percorrenza: <b>${tempo}</b>`);
			}
		});
		promise.catch(function () {
			console.log('errore');
		})

		//Soluzione senza promise --> con callBack
		/*directionsService.route(routesOptions, function(directionsRoutes){
			let mapOptions = {};
			let mappa = new google.maps.Map(map, mapOptions);
			if (directionsRoutes.status == google.maps.DirectionsStatus.OK)
				console.log(directionsRoutes.routes[0]);
		})*/
	})

}