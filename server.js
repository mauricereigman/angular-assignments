var express = require('express');
var app = express();

/** Serving static files from the same express Server
 to avoid cors */
app.use(express.static('./'));


app.listen('3000', function () {
    console.log('running on 3000...');
});
