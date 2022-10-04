import React, { useState, useEffect } from 'react';
import ProductCheckout from '../component/ProductCheckout';
import Request from '../utils/Request';
import { GET_REQUEST, POST_REQUEST, PUT_REQUEST, DELETE_REQUEST } from '../utils/Request';

const Checkout = () => {
	useEffect(() => {
		// requestAPI();
	}, []);

	const [product, setProduct] = useState([1, 1, 1, 1]);
	const [total, setTotal] = useState(0);

	return (
		<div className='row mt-5'>
			<div className='col-12 d-flex justify-content-center'>
				<div className='w-50'>
					<div className='card'>
						<div className='card-body'>
							{(product || []).map((e, i) => (
								<ProductCheckout data={e} key={`detail_${i}`} />
							))}

							<div className='d-flex justify-content-center flex-column'>
								<div className='mt-4 text-center'>
									<h4 className='fw-bold'>TOTAL: Rp. {total}-,</h4>
								</div>
								<button type='button' className='btn btn-info mt-2 rounded-pill'>
									<span className='fw-bold text-white'>CONFIRM</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
