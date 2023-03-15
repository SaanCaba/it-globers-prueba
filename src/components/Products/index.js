import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions';
import { AiOutlineRight } from 'react-icons/ai';

import './products.scss';
import ProductItem from '../ProductItem';

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	useEffect(() => {
		dispatch(setProducts());
	}, []);

	return (
		<section className='sectionProducts'>
			{products.map((el, i) => {
				return (
					<div key={i} className='contProductItem'>
						<ProductItem product={el} />
					</div>
				);
			})}
		</section>
	);
};

export default Products;
