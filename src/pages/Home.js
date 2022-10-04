import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../store/action/ProductAction';
import Product from '../component/Product';
import Request from '../utils/Request';
import { GET_REQUEST, POST_REQUEST, PUT_REQUEST, DELETE_REQUEST } from '../utils/Request';

const Home = ({ fetch, product = [] }) => {
	useEffect(() => {
		fetch();
	}, [fetch]);

	// const [products, setProducts] = useState([]);

	// const requestAPI = async () => {
	// 	const response = await Request({ method: GET_REQUEST, endpoint: '/product' });
	// 	setProduct(response.data.data);
	// };

	return (
		<div className='row'>
			<div className='col-12'>
				<div className='card'>
					<div className='card-body'>
						{product?.map((e, i) => (
							<Product key={`product_${i}`} data={e} />
						))}
						<div className='d-flex justify-content-center mt-5'>
							<button type='button' className='btn btn-info rounded-pill'>
								<span className='fw-bold text-white'>&nbsp; CHECKOUT &nbsp;</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	let product = state?.product?.data;

	console.log('product', product);

	return {
		...{ product },
	};
};

const mapDispatchToProps = {
	fetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
