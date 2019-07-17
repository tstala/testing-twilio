const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.list({limit: 20})
               .then(messages => messages.forEach(m => console.log(`Message SID: ${m.sid}, From: ${m.from}, To: ${m.to}, Status: ${m.status}, Body: ${m.body}, Price ${m.price}`)));
