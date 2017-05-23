'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({ extended: true })); // allow to send json
app.use(bodyParser.json()); // easy to parse json when receive data

const line = require('./handler/line.js');

// LINE Webhook
app.post('/callback', line.callback);

app.listen(app.get('port'), function() {
  console.log(`Node app[${app.get('port')}] is running`);
});
