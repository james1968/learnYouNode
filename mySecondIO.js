var fs = require('fs');
var contents = fs.readFile(process.argv[2], function callback(err, data){
	if (err) {
		throw err;
	}
	content = data;
	var lines = content.toString().split('\n').length - 1;
	console.log(lines);
});

