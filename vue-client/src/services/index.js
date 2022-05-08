const files = require.context('./modules', false, /\.js$/);
const services = {};

files.keys().forEach((key) => {
	services[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default services;