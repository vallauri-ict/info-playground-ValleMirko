"use strict";

const URL = "https://maps.googleapis.com/maps/api"

$(document).ready(function(){
	// creazione dinamica del CDN di accesso alle google maps
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = URL + '/js?v=3&key='+ MAP_KEY +'&callback=documentReady';
	document.body.appendChild(script);
})	


function documentReady () {	
	let header =$("#header")
	let wrapper = $("#wrapper") 
	let map =  wrapper.children(".map")[0]     // js
	let panel= wrapper.children(".panel")[0]   // js
	let msg =  wrapper.children(".msg") 
	
	$('input[type=button]').on('click', function(){
		let partenza = $('input[type=text]').eq(0).val();
		let arrivo = header.find('input').eq(1).val();
		function visualizzaPercorso(partenza, arrivo) {
			let directionsService = new google.maps.DirectionsService();
			let routesOptions = {
			origin: partenza,
			destination: arrivo,
			travelMode: google.maps.TravelMode.DRIVING, // default
			provideRouteAlternatives:true, // default=false
			avoidTolls:false, // default (pedaggi)
			};

			let promise = directionsService.route(routesOptions)
			.promise.then(function(directionsRoutes) {
				let mapOptions = {
					//'zoom': 15,
					//'mapTypeId' :  google.maps.MapTypeId.ROADMAP
				};
			let mappa = new google.maps.Map(div, mapOptions);
			if (status == google.maps.DirectionsStatus.OK){
			 console.log(directionsRoutes.routes[0])
			 let i=1;
			 let renderOptions = {
				polylineOptions: {
					strokeColor : "#44F", // colore del percorso
					strokeWeight : 6, // spessore
					zIndex : 100 // posizionamento
				}
			}	
			 for (const route of directionsRoutes.routes) {			
					let directionsRenderer = new google.maps.directionsRenderer(renderOptions);
					let color = 50*i;
					renderOptions.polylineOptions.strokeColor = `rgb(${color}, ${color}, ${color} )`;
					renderOptions.polylineOptions.strokeWeight = 5;
					renderOptions.polylineOptions.zIndex = 100-i;

					directionsRenderer.setMap(mappa);
					directionsRenderer.setDirections(directionsRoutes);
					if(i==1){
						panel.innerHTML = "";
						directionsRenderer.setPanel(panel);
					}
					//directionsRenderer.setRouteIndex(0);
					let distanza =route.legs[0].distance.text;
					let tempo = route.legs[0].duration.text
					msg.html(`Percorso: <b>${i}<br> Distanza:${distanza}<br> Tempo: ${tempo}`);
					i++;
			 	}

			}
		});
	promise.catch(function(){
		console.log('errore');
		})
		/*directionsService.route(routesOptions, function(directionsRoutes){
			let mapOptions = {};
		let mappa = new google.maps.Map(div, mapOptions);
		if (directionsRoutes.status == google.maps.DirectionsStatus.OK)
		 console.log(directionsRoutes.routes[0])*/
		});
}