const axios = require('axios').default;

export const GET_REQUEST = 'GET';
export const POST_REQUEST = 'POST';
export const PUT_REQUEST = 'PUT';
export const DELETE_REQUEST = 'DELETE';

const Request = async ({ method, endpoint, data }) => {
	switch (method) {
		case GET_REQUEST:
			return await axios.get(endpoint).then((res) => res);
		default:
			break;
	}
};

export default Request;
