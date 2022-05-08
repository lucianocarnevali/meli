import axios from 'axios';
import config from '@/config/master';

/**
 * Axios instance used for sending all requests to the API
 */
const Api = () => {
	const options = {
		baseURL: config.api.baseURL,
		crossDomain: true,
		headers: {}
	};

	const instance = axios.create(options);

	return instance;
};

export default Api;