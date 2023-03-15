import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGalleryImages } from '../../redux/actions';
import './callToAction.scss';
import Subscribe from '../Subscribe';

const CallToAction = () => {
	const dispatch = useDispatch();
	const galleryImages = useSelector((state) => state.galleryImages);
	useEffect(() => {
		dispatch(setGalleryImages());
	}, []);
	return (
		<section className='sectionCallToAction'>
			<div className='contSocialMedia'>
				<span className='instagramText'>INSTAGRAM</span>
				<span className='hashtagText'>#ESPUFI</span>
			</div>
			<div className='contGalleryImages'>
				{galleryImages.map((image, i) => {
					return (
						<div className='contImages' key={i}>
							<img src={image} alt='Image of gallery' />
						</div>
					);
				})}
			</div>
			<div className='contSubscribeOption'>
				<div className='contTitles'>
					<span>NEWSLETTER</span>
					<span>SUSCRIBITE</span>
					<span>Y enterate de todas las novedades</span>
				</div>
				<Subscribe />
			</div>
		</section>
	);
};

export default CallToAction;
