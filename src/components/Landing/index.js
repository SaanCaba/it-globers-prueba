import React from 'react';

import backImage_1 from '../../assets/backgroundImages/backImage_1.jpg';

import './landing.scss';

const Landing = () => {
	return (
		<section className='sectionLanding'>
			<div className='contTitleLanding'>
				<span>ESTÁR CÓMODO,</span>
				<span>NUNCA FUE TAN FÁCIL.</span>
			</div>
			<div className='contBtnLanding'>
				<button>SHOP</button>
			</div>
			<img className='imgLanding' src={backImage_1} />
		</section>
	);
};

export default Landing;
