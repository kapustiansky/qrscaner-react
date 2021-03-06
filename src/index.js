import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter, Route } from "react-router-dom";

import LocalStor from './components/localstor-item';

import './index.css';

const App = () => {

return	(
	<HashRouter  basename="/">
	<section className="container my-5 px-0 z-depth-1 p-5 my-md-5 text-center main-section">
			<Route path="/" component={LocalStor} />
	</section>
	</HashRouter>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
