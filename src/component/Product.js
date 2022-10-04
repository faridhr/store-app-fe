import React from 'react';
import { Link } from 'react-router-dom';
import ImageCard from './ImageCard';

const Product = ({ data: { id, productName, discountPrice, discount, price, currency } }) => {
	return (
		<div className='card mb-2'>
			<div className='card-body'>
				<div className='row align-items-center'>
					<div className='col-2'>
						<ImageCard style={{ maxWidth: '6rem' }} />
					</div>
					<div className='col-8' style={{ height: '100%' }}>
						<div className='d-flex flex-column justify-content-center'>
							<Link className='fw-bold text-decoration-none' to={`/product/detail/${id}`}>
								{' '}
								{productName}{' '}
							</Link>
							<p className={`mb-0 ${discount !== 0 && 'text-decoration-line-through'}`}>{`${currency === 'IDR' && 'Rp. '} ${price}-,`}</p>
							{discount !== 0 && <p className='mb-0'>{`${currency === 'IDR' && 'Rp. '} ${discountPrice}-,`}</p>}
						</div>
					</div>
					<div className='col-2'>
						<button type='button' className='btn btn-info rounded-pill'>
							<span className='text-white'>&nbsp; BUY &nbsp;</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
