import React from 'react';
import { Link } from 'react-router-dom';
import ImageCard from './ImageCard';

const Product = ({ data: { id, productName, discountPrice, discount, price, currency, unit } }) => {
	return (
		<div className='card mb-2'>
			<div className='card-body'>
				<div className='row align-items-center'>
					<div className='col-3'>
						<ImageCard style={{ maxWidth: '6rem' }} />
					</div>
					<div className='col-9' style={{ height: '100%' }}>
						<div className='d-flex flex-column justify-content-center'>
							<h3>{productName}</h3>
							<p>{`${1} ${unit}`}</p>
							<p>Subtotal : Rp. 0-,</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
