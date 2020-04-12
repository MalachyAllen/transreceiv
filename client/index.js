const NET = require('net');
const PROCESS = require('process');
const NoIPError = 'An IP address must be entered.';
const InvalidIPError = 'Invalid IP address entered.';
const NoMessageContentError = 'No data entered. Enter data in quotes.';

let HOST;
if (process.argv[2] == null) {
    throw NoIPError;
}

if (NET.isIP(process.argv[2]) != 0 || process.argv[2] == 'localhost') {
    HOST = process.argv[2];
}
else {
    throw InvalidIPError;
}

let data;
if (process.argv[3] != null) {
    data = process.argv[3];
}
else {
    throw NoMessageContentError;
}

const PORT = 2876;

const CLIENT = new NET.Socket();
CLIENT.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    CLIENT.write(data);
});
CLIENT.on('data', function(data) {
    console.log('DATA: ' + data);
    CLIENT.destroy();
});
CLIENT.on('close', function() {
    console.log('Connection closed.');
});