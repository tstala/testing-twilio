
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

(async() => {
  try {
        let messages = await client.messages.list({limit: 20});
        messages.forEach(async (message) => await console.log(`Message SID: ${message.sid}, From: ${message.from}, To: ${message.to}, Status: ${message.status}, Body: ${message.body}, Price ${message.price}`));
  } catch(err) {
        console.log(err);
  }
})();
