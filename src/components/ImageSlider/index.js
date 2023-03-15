import React, { useState } from 'react';

import './imageSlider.scss';

const ImageSlider = ({ images, setCurrentBackGroundImage }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<>
			<img
				src={`${images[currentIndex].url}`}
				alt={`${images[currentIndex].title}`}
			/>
			<div className='dotsContainer'>
				{images.map((image, imageIndex) => {
					return (
						<div
							className={
								currentIndex === imageIndex
									? 'contDotActive contDot'
									: 'contDot'
							}
							key={imageIndex}>
							<div
								onClick={() => setCurrentIndex(imageIndex)}
								className={
									currentIndex === imageIndex ? 'activeDot dot' : 'dot'
								}></div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ImageSlider;
