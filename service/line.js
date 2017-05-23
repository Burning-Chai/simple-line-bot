'use strict';

const axios = require('axios');

const REPLY_ENDPOINT = 'https://api.line.me/v2/bot/message/reply';
const PUSH_ENDPOINT = 'https://api.line.me/v2/bot/message/push';

const accessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const config = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${accessToken}`,
  },
};

const replyMessage = (message, replyToken) => {
  const requestBody = {
    replyToken: replyToken,
    messages: [
      {
        type: 'text',
        text: message,
      }
    ],
  };

  axios.post(REPLY_ENDPOINT, requestBody, config)
    .then(resp => console.log(`[DEBUG] POST ${REPLY_ENDPOINT} ${resp.status} ${resp.statusText}`))
    .catch(err => console.error(err));
};

const pushMessage = (message, to) => {
  const requestBody = {
    to: to,
    messages: [
      {
        type: 'text',
        text: message,
      }
    ],
  };

  axios.post(PUSH_ENDPOINT, requestBody, config)
    .then(resp => console.log(`[DEBUG] POST ${PUSH_ENDPOINT} ${resp.status} ${resp.statusText}`))
    .catch(err => console.error(err));
};

module.exports = {
  replyMessage: replyMessage,
  pushMessage: pushMessage,
};
