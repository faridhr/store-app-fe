const axios = require('axios').default;

export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const SAVE_PRODUCT = 'SAVE_PRODUCT';

export const fetch = () => async (dispatch) => {
	try {
		dispatch({ type: FETCH_PRODUCT });
		const response = await axios.get('/product').then((res) => res.data || []);
		console.log('response', response);
		dispatch({ type: RECEIVE_PRODUCT, payload: response });
	} catch (error) {
		console.error(error);
	}
};
