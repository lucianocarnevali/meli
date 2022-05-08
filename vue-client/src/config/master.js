const env = process.env;

export default {
	node_env: env.NODE_ENV,

	api: {
		baseURL: env.VUE_APP_API_BASE_URL,
	},
	client: {
		baseURL: env.VUE_APP_CLIENT_BASE_URL
	},
};