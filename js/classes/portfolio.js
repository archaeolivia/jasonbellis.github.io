//Core Map logic goes here

import {
	locations
} from 'data/locations'

// import {
// 	styleData
// } from 'style'

export default class Portfolio {
	construction(locations, styleData) {
		//Store access token
		this.mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rvb2t5IiwiYSI6ImNpZWxncnU5MDAwYTNzZWt1N2VoNHBiajYifQ.PPBpAP3rWcAAnMiAu1iJLg'
		
		//Establish the values for our geographical features
		this.schools = locations.hasOwnProperty('schools') ? locations.schools : null;
		this.work = locations.hasOwnProperty('work') ? locations.work : null;
		this.excavations = locations.hasOwnProperty('excavations') ? locations.excavation : null;
		this.homes = locations.hasOwnProperty('home') ? locations.home : null;

		this.bounds = null;

		this.zooming = false; //This is true only when map is in the middle of a zoom operation!
		this.panning = false; //This is true only when map is panning!

		this.map = new mapboxgl.Map({
		    container: 'map', // container id
		    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
		    center: [13.1910, 55.7047], // starting position [lng, lat]
		    zoom: 9 // starting zoom
		});

		  //Add features to map
		  map.on("load", function() {
			map.addSource("homes", {
			  "type": "geojson",
			  "data": homes
			});
			map.addLayer({
			  "id": "homes",
			  "type": "circle",
			  "source": "homes",
			  "paint": {
				"circle-color": "#888",
				"circle-radius": 10,
			  }
			});
		  });
	}
}
