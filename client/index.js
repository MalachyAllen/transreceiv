const NET = require('net');
const PROCESS = require('process');

const HOST = process.argv[2];
const PORT = 2876;

const CLIENT = new NET.Socket();
CLIENT.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    CLIENT.write('Test data 123');
});
CLIENT.on('data', function(data) {
    console.log('DATA: ' + data);
    CLIENT.destroy();
});
CLIENT.on('close', function() {
    console.log('Connection closed.');
});