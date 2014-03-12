js-api-streaming
================

A demo app in Javascript for streaming rates using OANDA open api

### Setup

Clone this repo to the location of your choice

Update the following information in streaming.js:

    host
    port
    accountId
    access_token

To execute, open index.html in your browser

### Sample Output

	Connected to Streaming Rates
	{"instrument":"EUR_USD","time":"2014-03-11T19:09:42.973101Z","bid":1.38673,"ask":1.38685}
	{"instrument":"USD_CAD","time":"2014-03-11T19:09:42.040914Z","bid":1.11062,"ask":1.1108}
	{"instrument":"EUR_USD","time":"2014-03-11T19:09:40.654826Z","bid":1.38673,"ask":1.38685}
	{"instrument":"EUR_USD","time":"2014-03-11T19:09:40.651597Z","bid":1.38672,"ask":1.38685}

### More Information

http://developer.oanda.com/