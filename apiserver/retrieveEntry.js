var blockchain = require('mastercard-blockchain');
var MasterCardAPI = blockchain.MasterCardAPI;
var protobuf = require("protobufjs");
var consumerKey = "Q8fBANqsrW0jmYDIxBYvM51TV37Yyk5AsIekZa5Sd7425069!20a7bb099d384d31b85349783a7149310000000000000000";   // You should copy this from "My Keys" on your project page e.g. UTfbhDCSeNYvJpLL5l028sWL9it739PYh6LU5lZja15xcRpY!fd209e6c579dc9d7be52da93d35ae6b6c167c174690b72fa
var keyStorePath = "keystore.p12"; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12
var keyAlias = "keyalias";   // For production: change this to the key alias you chose when you created your production key
var keyPassword = "keystorepassword";   // For production: change this to the key alias you chose when you created your production key

var counter = 0;

// You only need to do initialize MasterCardAPI once
//
var authentication = new MasterCardAPI.OAuth(consumerKey, keyStorePath, keyAlias, keyPassword);
MasterCardAPI.init({
	sandbox: true,
	debug: true,
	authentication: authentication
});

var Message;

protobuf.load("message.proto", function(err, root) {
	if (!err) {
		Message = root.lookupType("GD01.Message");
	}
});

function retrieve(hash, callback) {
  var requestData = {

	};
	blockchain.TransactionEntry.read("", { "hash": hash }
  , function (error, data) {
    if (error) {
      console.error("HttpStatus: "+error.getHttpStatus());
      console.error("Message: "+error.getMessage());
      console.error("ReasonCode: "+error.getReasonCode());
      console.error("Source: "+error.getSource());
      console.error(error);

    }
    else {

			var message = Message.decode(new Buffer(data.value, 'hex'));
			var object = Message.toObject(message, {
					longs: String,
					enums: String,
					bytes: String
			});
			console.log("candidate = ", object)
			callback(object)

			}

      // var response = JSON.parse(partitions[].entries[]);
      // console.log(response);

  });
}

/*
for (i = 0; i < data.length; i++) {
	for (j = 0; j < data[i].partitions.length; j++) {
		var entries = data[i].partitions[j].entries
		if (entries.length > 0) {
			console.log("entries = " + entries)
			console.log("entries[0] = " + entries[0])
			var entryHex = entries[0].value
			console.log("entry hex = " + entryHex)
			var message = Message.decode(new Buffer(entryHex, 'hex'));
			var object = Message.toObject(message, {
					longs: String,
					enums: String,
					bytes: String
			});

			console.log("candidate = " + object)
			callback(object, entries[0].slot)
		}
	}*/
	/*
	for (j = 0; j < data.partitions.length; j++) {
		var entries = data.partitions[j].entries
		if (entries.length > 0) {
			console.log("entries = " + entries)
			console.log("entries[0] = " + entries[0])
			var entryHex = entries[0].value
			console.log("entry hex = " + entryHex)
			var message = Message.decode(new Buffer(entryHex, 'hex'));
			var object = Message.toObject(message, {
					longs: String,
					enums: String,
					bytes: String
			});

			console.log("candidate = " + object)
			callback(object, entries[0].slot)
		}
		*/
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

module.exports = retrieve;
