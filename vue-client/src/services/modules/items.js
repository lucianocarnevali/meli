import Api from '../Api';

export default {

	getItems(params) {
		return Api().get(`/api/items${params}`);
	},
	getItem(itemId) {
		return Api().get(`/api/items/${itemId}`);
	},
};
