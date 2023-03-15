import React from 'react';

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
			<img
				className='imgLanding'
				src={
					'https://www.happers.es/server/Portal_0010689/img/galeria/carrusel_happers_to_go_s7_30455.jpg'
				}
			/>
		</section>
	);
};

export default Landing;
