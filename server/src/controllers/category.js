const author = require('../constants/author');
const axios = require('axios');

const getBreadcrumbByCategoryId = async (req, res, next) => {
	const categoryId = req.params.id;

	if (categoryId) {
		try {
			const categoryResponse = await axios.get(encodeURI(`https://api.mercadolibre.com/categories/${categoryId}`));

			const category = categoryResponse.data;

			const responseData = {
				author,
				category: {
					id: category.id,
					name: category.name,
					path_from_root: category.path_from_root
				}
			}
			res.json(responseData);
		} catch (err) {
			err => next(err);
		}
	} else {
		res.json('ID empty');
	}
};

module.exports = { getBreadcrumbByCategoryId };