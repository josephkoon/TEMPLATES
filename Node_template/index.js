var express = require('express'); //express is backend code. sending files. routing from homepacge
var controller = require('./controller'); //link to file

var bodyParser = require('body-parser');

var app = express() //sets up express
var router = express.Router(); //sets up router

app.use(bodyParser.json()) //body parser in JSON




router.route('/') //home page
.get(controller.getTestFunction) //get to pull
.post(controller.postTestFunction) //post the function



app.use(router) //sets up connection to the router

var port = 3001
var host = '127.0.0.1' //local host

console.log('listening on', host, port)
app.listen(port,host) //in the website