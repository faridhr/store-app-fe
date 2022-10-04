import React from 'react';
import { Link } from 'react-router-dom';
import ImageCard from './ImageCard';

const ProductDetail = ({ data: { id, productName, discountPrice, discount, price, currency, dimension, unit } }) => {
	return (
		<div className='row align-items-center'>
			<div className='col-6'>
				<ImageCard style={{ maxWidth: '15rem' }} />
			</div>
			<div className='col-6'>
				<h3 className='fw-bold'>{productName}</h3>
				<p className={`mb-0 ${discount !== 0 && 'text-decoration-line-through'}`}>{`${currency === 'IDR' && 'Rp. '} ${price}-,`}</p>
				{discount !== 0 && <p className='mb-0'>{`${currency === 'IDR' && 'Rp. '} ${discountPrice}-,`}</p>}
				<p className='mb-0'>Dimension: {dimension}</p>
				<p className='mb-0'>Price unit: {unit}</p>
				<button type='button' className='btn btn-info rounded-pill w-100 mt-5'>
					<span className='text-white'> BUY </span>
				</button>
			</div>
		</div>
	);
};

export default ProductDetail;
