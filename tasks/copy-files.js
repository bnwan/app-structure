var cpy = require('cpy');

cpy([
	'client/app.json',
	'client/index.html'
], 'build', function(){
	console.log('files copied');
});