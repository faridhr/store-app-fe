import { RECEIVE_PRODUCT, FETCH_PRODUCT } from '../action/ProductAction';

const initialState = {};

export const ProductReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case FETCH_PRODUCT:
			return { ...state };

		case RECEIVE_PRODUCT:
			return { ...state, ...payload };

		default:
			return { ...state };
	}
};

export default ProductReducer;
