'use strict';

const service = require('../service/service.js');

const callback = (req, res) => {
  req.body.events
    .filter(event => !!event.type && event.type === 'message')
    .forEach(event => {
      const message = event.message.text;
      const replyToken = event.replyToken;

      service.line.replyMessage(message, replyToken);
    });

  res.sendStatus(200);
};

module.exports = {
  callback: callback,
};
