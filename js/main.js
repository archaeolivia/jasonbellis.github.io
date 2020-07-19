//Function to add data to map outside of insitial loader
export function addDataToMap() {
	//Add Sources
    Portfolio.map.addSource("homes", {
        "type": "geojson",
        "data": Portfolio.homes //Points towards our home dataset
    });
	//Add Layers
	Portfolio.map.addLayer({
        "id": "homes",
        "type": "circle",
        "source": "homes",
        "paint": {
          "circle-color": "#888",
          "circle-radius": 10,
        }
    });
}