const NET = require('net');
const PORT = 2876;

const NoIPError = 'An IP address must be entered.';
const InvalidIPError = 'Invalid IP address entered.';

let host;
if (process.argv[2] != null && NET.isIP(process.argv[2]) != 0 || process.argv[2] == 'localhost') {
    host = process.argv[2];
}
else {
    if (process.argv[2] == null) {
        throw NoIPError;
    }
    if (process.argv[2] == 0) {
        throw InvalidIPError;
    }
}

NET.createServer(function(sock) {
    console.log('SERVER CREATED ON: ' + sock.remoteAddress + ';' + sock.remotePort);
    sock.on('data', function(data) {
        console.log('DATA RECEIVED FROM: ' + sock.remoteAddress + ': ' + data);
        sock.write('DATA CONTENT: "' + data + '"');
    });
    sock.on('close', function(data) {
        console.log('CONNECTED CLOSED FROM: ' + sock.remoteAddress + ':' + sock.remotePort);
    });
}).listen(PORT, host);

console.log('Server listening on ' + host + ':' + PORT);