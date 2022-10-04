import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Checkout from '../pages/Checkout';
import Header from './Header';
import Footer from './Footer';

const Content = () => {
	return (
		<>
			<Header />
			<main className='container mt-3'>
				<div className='modal fade' id='modal-pdf' tabIndex='-1' aria-labelledby='modal-pdf-label' aria-hidden='true'>
					<div className='modal-dialog'></div>
				</div>
				<Switch>
					<Route exact path='/product/detail/:id'>
						<Detail />
					</Route>
					<Route exact path='/checkout'>
						<Checkout />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</main>
			<Footer />
		</>
	);
};

export default Content;
