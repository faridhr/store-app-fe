const initialState = {};

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const SAVE_PRODUCT = 'SAVE_PRODUCT';

export const ProductReducer = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case RECEIVE_PRODUCT:
			return { ...state };

		default:
			return { ...state };
	}
};

export default ProductReducer;
