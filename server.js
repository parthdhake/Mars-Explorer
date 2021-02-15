const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/src/mars-explorer'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/mars-explorer/src/index.html'));});
app.listen(process.env.PORT || 8080);
