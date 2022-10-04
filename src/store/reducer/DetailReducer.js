const initialState = {};

export const RECEIVE_DETAIL = 'RECEIVE_DETAIL';
export const BUY_PRODUCT = 'BUY_PRODUCT';

export const ProductReducer = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case RECEIVE_DETAIL:
			return { ...state };

		case BUY_PRODUCT:
			return { ...state };

		default:
			return { ...state };
	}
};

export default ProductReducer;
