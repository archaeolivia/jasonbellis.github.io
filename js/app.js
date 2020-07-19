let app;

import Portfolio from './classes/portfolio.js';
import {
	locations
} from './data/locations.js'

// import {
// 	styleData
// } from 'style'

//load the portfolio class into the app
if (!window.Portfolio) window.Portfolio = new Portfolio(locations);
// app.Portfolio = new Portfolio(locations);