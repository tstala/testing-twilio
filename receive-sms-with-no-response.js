const bodyParser = require('body-parser');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/message', (req, res) => {

  const msgFrom = req.body.From;
  const msgTo = req.body.To;
  const msgBody = req.body.Body;
  const msgSid = req.body.MessageSid;

  const twiml = new MessagingResponse();

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());

  console.log(`Message SID: ${msgSid}\nFrom: ${msgFrom}\nTo: ${msgTo}\nMessage Body: ${msgBody}`);

});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
