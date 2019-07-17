# twilio-receive-sms-with-no-response

This application prints a Message Sid, From, To and Body of the incoming message sent to Twilio phone number.

## Usage

Install dependencies

```
npm install express body-parser twilio --save
```

Configure `A MESSAGE COMES IN` option under `Phone Numbers / Manage Numbers / Active Numbers / Messaging` to use webhook when there will be a new inbound SMS. Specify an HTTP request URI in the following format:

```
http://localhost:3000/message
```

