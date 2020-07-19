//Core Map logic goes here

export default class Portfolio {
	constructor(locations, styleData) {
		//Establish the values for our geographical features
		this.schools = locations.hasOwnProperty('schools') ? locations.schools : null;
		this.work = locations.hasOwnProperty('work') ? locations.work : null;
		this.excavations = locations.hasOwnProperty('excavations') ? locations.excavations : null;
		this.homes = locations.hasOwnProperty('homes') ? locations.homes : null;

		this.bounds = null;

		this.zooming = false; //This is true only when map is in the middle of a zoom operation!
		this.panning = false; //This is true only when map is panning!

		//Store access token
		mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rvb2t5IiwiYSI6ImNpZWxncnU5MDAwYTNzZWt1N2VoNHBiajYifQ.PPBpAP3rWcAAnMiAu1iJLg';

		this.map = new mapboxgl.Map({
		    container: 'map', // container id
		    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
		    center: [13.1910, 55.7047], // starting position [lng, lat]
		    zoom: 9 // starting zoom
		});

		//Add features to map
		this.map.on("load", function() {
			this.map.addSource("homes", {
			  "type": "geojson",
			  "data": this.homes //Points towards our home dataset
			});
			this.map.addLayer({
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
