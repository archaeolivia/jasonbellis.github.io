//The launch point for the app
//Import and construct any modules that are needed
import Portfolio from './classes/portfolio.js';
import {
	locationData
} from './data/locations.js'

// import {
// 	styleData
// } from 'style'

//load the portfolio class into the app
if (!window.Portfolio) window.Portfolio = new Portfolio(locationData);
