const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const fromNumber = process.env.WHATSAPP_FROM_NUMBER;
const toNumber = process.env.WHATSAPP_TO_NUMBER;

client.messages
      .create({
         body: 'Test message sent from Twilio WhatsApp Sandbox',
         from: fromNumber,
         to: toNumber
       })
      .then(message => console.log(message.sid))
      .done();
