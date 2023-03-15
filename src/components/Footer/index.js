import React from 'react';

import qrImg from '../../assets/footerImgs/Data-fiscal-Web.jpg';
import securityImg from '../../assets/footerImgs/securityLogo.png';
import brandLiveLogo from '../../assets/footerImgs/brandliveLogo.webp';

import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im';

import './footer.scss';

const Footer = () => {
	return (
		<footer className='mainFooterContent'>
			<section className='sectionFooterContent'>
				<div className='contTitleFooter'>
					<span>Pufi</span>
				</div>
				<div className='contTypesOfPufi'>
					<ul>
						<li>PUFI RAIN</li>
						<li>PUFI PUFF</li>
						<li>PUFI CART</li>
						<li>PUFI NAP</li>
					</ul>
				</div>
				<div className='contHelpUser'>
					<ul>
						<li>CONTACTO</li>
						<li>AYUDA</li>
						<li>CÓMO COMPRAR</li>
						<li>TÉRMINOS & CONDICIONES</li>
					</ul>
				</div>
				<div className='contPayment'>
					<section className='sectionTitleSecurity'>
						<span>COMPRA 100% SEGURA</span>
					</section>
					<section className='sectionSecurity'>
						<img className='imgFooter' src={qrImg} alt='Fiscal data image' />
						<img className='imgFooter' src={securityImg} alt='Security image' />
						<div className='contAdvice'>
							<span>COMPRÁ CON LA GARANTIA DE PUFI</span>
						</div>
					</section>
				</div>
				<div className='contSocialMedia'>
					<span>SEGUINOS EN </span>
					<div className='contIconsSocialMedia'>
						<ImFacebook /> <ImTwitter /> <ImInstagram />
					</div>
				</div>
			</section>
			<hr />
			<section className='sectionFooterRights'>
				<span className='copyRightText'>
					PUFI Copyright 2017 - Todos los derechos reservados
				</span>
				<img src={brandLiveLogo} alt='BrandLive Logo' />
			</section>
		</footer>
	);
};

export default Footer;
