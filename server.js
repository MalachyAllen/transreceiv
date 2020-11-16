const NET = require('net');
const PROCESS = require('process');
const PORT = 2876;

const NoIPError = 'An IP address must be entered.';
const InvalidIPError = 'Invalid IP address entered.';

let host;
if (PROCESS.argv[2] != null && NET.isIP(PROCESS.argv[2]) != 0 || PROCESS.argv[2] == 'localhost') {
    host = PROCESS.argv[2];
}
else {
    if (PROCESS.argv[2] == null) {
        throw NoIPError;
    }
    if (PROCESS.argv[2] == 0) {
        throw InvalidIPError;
    }
}

NET.createServer(function(sock) {
    console.log('CONNECTION FROM: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.on('data', function(data) {
        console.log('DATA RECEIVED FROM: ' + sock.remoteAddress + ': ' + data);
        sock.write('DATA CONTENT: "' + data + '"');
    });
    sock.on('close', function() {
        console.log('CONNECTED CLOSED FROM: ' + sock.remoteAddress + ':' + sock.remotePort);
    });
}).listen(PORT, host);

console.log('Server listening on ' + host + ':' + PORT);