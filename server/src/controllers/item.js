const author = require('../constants/author');
const axios = require('axios');

const serachItems = async (req, res, next) => {
	const search = req.query.q;
	const limit = req.query.limit;
	if (search) {
		try { 
			const queryParams = `?q=${search}&limit=${limit}`;

			const searchResponse = await axios.get(encodeURI(`https://api.mercadolibre.com/sites/MLA/search${queryParams}`));

			const results = searchResponse.data.results;
			const categories = results.map((r) => r.category_id);
			const items = results.map((r) => {
				return {
					id: r.id,
					title: r.title,
					price: {
						currency: r.currency_id,
						amount: Math.trunc(r.price),
						decimals: Number((r.price - Math.trunc(r.price)).toFixed(2))
					},
					address: {
						state_name: r.address.state_name
					},
					picture: r.thumbnail,
					condition: r.condition,
					free_shipping: r.shipping.free_shipping
				};
			});
			const responseData = {
				author,
				categories,
				items
			}
			res.json(responseData);
		} catch (err) {
			res.json(err);

			next(err);
		}

	} else {
		res.json('Search empty');
	}
};


const getItemById = async (req, res, next) => {
	const itemId = req.params.id;

	if (itemId) {
		try {
			const requestItem = axios.get(encodeURI(`https://api.mercadolibre.com/items/${itemId}`));
			const requestItemDescription = axios.get(encodeURI(`https://api.mercadolibre.com/items/${itemId}/description`));

			const [itemResponse, itemDescriptionResponse] = await Promise.all([requestItem, requestItemDescription]);
			const item = itemResponse.data;
			const itemDescription = itemDescriptionResponse.data;

			const responseData = {
				author,
				item: {
					id: item.id,
					title: item.title,
					category_id: item.category_id,
					price: {
						currency: item.currency_id,
						amount: Math.trunc(item.price),
						decimals: Number((item.price - Math.trunc(item.price)).toFixed(2))
					},
					sold_quantity: item.sold_quantity,
					picture: item.thumbnail,
					condition: item.condition,
					free_shipping: item.shipping.free_shipping,
					description: itemDescription.plain_text
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

module.exports = { serachItems, getItemById };