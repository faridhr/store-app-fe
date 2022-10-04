import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
import Login from './pages/Login';

import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const axios = require('axios').default;

axios.interceptors.request.use(
	function (config) {
		config.baseURL = 'http://localhost:8080/api/v1';
		return config;
	},
	function (error) {
		console.log('error', error);
		return Promise.reject(error);
	}
);

const App = () => {
	return (
		<div className='wrapper'>
			<Router>
				<Switch>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route path='/'>
						<Content />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
