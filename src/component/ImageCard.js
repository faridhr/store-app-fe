import React from 'react';
import Soklin from '../assets/img/so-klin.png';

const ImageCard = ({ style }) => {
	return (
		<div>
			<img src={Soklin} className='img-thumbnail' style={{ ...style }} alt='Product' />
		</div>
	);
};

export default ImageCard;
