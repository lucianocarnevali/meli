const pkg = require('../../package.json');
const authorName = pkg.author.split(' ')[0];
const authorLastName = pkg.author.split(' ')[1];
const author = {
	name: authorName,
	lastname: authorLastName
}

module.exports = author;