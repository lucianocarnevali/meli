import Api from '../Api';

export default {

	getCategory(categoryId) {
		return Api().get(`/api/categories/${categoryId}`);
	}
};