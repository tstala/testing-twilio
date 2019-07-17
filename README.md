# testing-twilio

`twilio-receive-sms-with-no-response.js` - this application prints a Message Sid, From, To and Body of the incoming message sent to Twilio phone number.

`twilio-list-messages.js` - this application list all sms messages

`twilio-list-messages-async-await.js` - this application list all sms messages using async/await functions

`twilio-remove-messages.js` - removes oldest two messages per each application run

`twilio-whatsapp-send-message.js` - application to send message using Twilio Sandbox for WhatsApp

## Usage

Install dependencies

```
npm install express body-parser twilio --save
```

Configure `A MESSAGE COMES IN` option under `Phone Numbers / Manage Numbers / Active Numbers / Messaging` to use webhook when there will be a new inbound SMS. Specify an HTTP request URI in the following format:

```
http://localhost:3000/message
```

Create `twilio.env` file where you are supposed to copy paste your Twilio Accound Sid and Auth Token

```
cat twilio.env
--
export TWILIO_ACCOUNT_SID=''
export TWILIO_AUTH_TOKEN=''
```

If you want to send WhatsApp messages please also include the following env variables

```
export WHATSAPP_FROM_NUMBER='whatsapp:+1xxxxxxxxx'
export WHATSAPP_TO_NUMBER='whatsapp:+48xxxxxxxxx'
```

Next, execute the command to read the environmental variables

```
source ./twilio.env
```
