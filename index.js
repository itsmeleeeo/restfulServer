const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const message = require('./api/model/msgModel')
let routes = require('./api/routes/msgRoutes');

routes(app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/msgdb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({hello: 'World'});
});

app.listen(console.log(`server running on port: ${port}`))