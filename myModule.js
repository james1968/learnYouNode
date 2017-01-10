module.exports = function() {
var fs = require('fs');
var path = require('path');
var contents = fs.readdir(process.argv[2], function callback(err, list){
	if (err) {
		throw err;
	} else for (var i=0; i < list.length; i++) {
		if (path.extname(list[i]) === '.'+process.argv[3]) {
			console.log(list[i]);
		}
	}
});
}