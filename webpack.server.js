const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './server/app.js',

	target: 'node',

	externals: [nodeExternals()],

	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.jsx$/,
				use: 'babel-loader'
			}
		]
	},

	output: {
		path: path.resolve('server-build'),
		filename: 'index.js'
	}
};
