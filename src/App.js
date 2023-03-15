import React from 'react';

import './App.scss';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Landing from './components/Landing';
import NavBar from './components/Navbar';
import Products from './components/Products';

const App = () => {
	return (
		<div className='App'>
			<NavBar />
			<Landing />
			<Products />
			<CallToAction />
			<Footer />
		</div>
	);
};

export default App;
