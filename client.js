const NET = require('net');
const READLINE = require('readline');
const PORT = 2876;
process.stdin.setEncoding('utf8');

const NoIPError = 'An IP address must be entered.';
const InvalidIPError = 'Invalid IP address entered.';

const RLINPUT = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

let host = RLINPUT.question('IP to connect to: ', (host) => {
    if (host == null) {
        throw NoIPError;
    }

    if (NET.isIP(host) != 0 || host == 'localhost') {
        console.log('IP address correct. IP is ' + host);
    }
    else {
        throw InvalidIPError;
    }

    RLINPUT.close();
});

// Help needed here, see issue #2.
/*const CLIENT = new NET.Socket();
CLIENT.connect(PORT, host, function() {
    console.log('CONNECTED TO: ' + host + ':' + PORT);
});
CLIENT.on('close', function() {
    CLIENT.destroy();
    console.log('Connection closed.');
});*/
