import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

import './productItem.scss';

const ProductItem = ({ product }) => {
	return (
		<>
			{product.onlyImg === true ? (
				<section className='contOnlyImg'>
					<div className='contBtn'>
						<button>SHOP</button>
					</div>
					<figure className='figureOnlyImg'>
						<img className='onlyImg' src={product.img} alt='imagenProducto' />
					</figure>
				</section>
			) : (
				<section className='contAllProduct'>
					<figure>
						<img className='onlyImg' src={product.img} alt='imagenProducto' />
					</figure>
					<span className='productTitle'>{product.title}</span>
					<hr />
					<div className='contDescProduct'>
						<p>Descripción del producto. Este es</p>
						<p> un texto simulado</p>
					</div>
					<div className='contSeeMore'>
						<AiOutlineRight />
						<span>VER MÁS</span>
					</div>
				</section>
			)}
		</>
	);
};

export default ProductItem;
