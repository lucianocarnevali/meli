import Api from '../Api';

export default {

	getItems(params) {
		return Api().get(`/api/items${params}`);
	}
};
