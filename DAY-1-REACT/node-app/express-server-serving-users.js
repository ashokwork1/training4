var express = require('express');
var cors= require('cors');


const app = express();

app.use(cors());

let users = {
  1: {
    id: '1',
    username: 'Bank User1',
  },
  2: {
    id: '2',
    username: 'Bank User2',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.listen(8081, () =>
  console.log(`Example app listening on port 8081!`),
);