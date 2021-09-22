const express = require('express');
const path = require('path');

const ngApp = express();

//ngApp.use(express.static('./dist/angular-ionic-poc'));
ngApp.use(express.static('./www'));

ngApp.get('/*', function (request, response) {
    //response.sendFile(path.join(__dirname, '/dist/angular-ionic-poc/index.html'));
	response.sendFile(path.join(__dirname, '/www/index.html'));
});

ngApp.listen(process.env.PORT || 8080);