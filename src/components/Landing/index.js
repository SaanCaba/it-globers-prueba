import React from 'react';
import { backgroundImages } from '../../data/imagesSlider';
import ImageSlider from '../ImageSlider';

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
			<ImageSlider images={backgroundImages} />
		</section>
	);
};

export default Landing;
