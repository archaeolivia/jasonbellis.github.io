// Establish geojson point features for various life events.

//Location objects container
let locationData = {};

//Geojson of all places I have lived
locationData.homes = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.1910, 55.7047]
        },
        "properties": {
          "name": "Lund",
          "information": "",
          "importance": "Location I moved to study for my masters degree in archaeology."
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-85.7585, 38.2527]
        },
        "properties": {
          "name": "Louisville",
          "information": "",
          "importance": "Location I grew up in. Attended all education till college in a suburb of Louisville called Goshen in Oldham County."
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-84.4519, 39.0331]
        },
        "properties": {
          "name": "Highland Heights",
          "information": "Composed of three counties on the southern side of the Ohio River just south of Cincinnati. Considered a part of greater Cincinnati while maintaining its own identiy.",
          "importance": "Location I moved attended undergrad. Home of Northern Kentucky University "
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-84.4472, 39.0751]
        },
        "properties": {
          "name": "Fort Thomas",
          "information": "Composed of three counties on the southern side of the Ohio River just south of Cincinnati. Considered a part of greater Cincinnati while maintaining its own identiy.",
          "importance": "Location I moved to later in undergrad and live at during the start of my professional career. "
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-84.5120, 39.1031]
        },
        "properties": {
          "name": "Cincinnati",
          "information": "",
          "importance": "Location in which my first few jobs out of undergrad were located. Also lived in a subburb of Cincinnati for a while."
        }
    }]
};
  
let education = {};
let work = {};
let excavations = {};
let features = {};
  

export { locationData };