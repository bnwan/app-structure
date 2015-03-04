var build = require('build-module');

build.bundle({
	name: 'app',
	root: './client/app.js',
	transforms: ['html2js', 'sassify']
});