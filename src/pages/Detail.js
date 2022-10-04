import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../component/ProductDetail';
import Request from '../utils/Request';
import { GET_REQUEST, POST_REQUEST, PUT_REQUEST, DELETE_REQUEST } from '../utils/Request';

const Detail = () => {
	let { id } = useParams();

	useEffect(() => {
		requestAPI();
	}, []);

	const [product, setProduct] = useState([]);

	const requestAPI = async () => {
		const response = await Request({ method: GET_REQUEST, endpoint: '/product' });
		setProduct(response.data.data);
	};

	return (
		<div className='row mt-5'>
			<div className='col-12 d-flex justify-content-center'>
				<div className='w-50'>
					<div className='card'>
						<div className='card-body'>
							{(product || [])
								.filter((e) => e.id == id)
								.map((e, i) => (
									<ProductDetail data={e} key={`detail_${i}`} />
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
