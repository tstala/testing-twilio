# testing-twilio

`twilio-receive-sms-with-no-response.js` - this application prints a Message Sid, From, To and Body of the incoming message sent to Twilio phone number.

`twilio-list-messages.js` - this application list all sms messages

`twilio-remove-messages.js` - removes oldest two messages per each application run

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

Next, execute the command to read the environmental variables

```
source ./twilio.env
```
