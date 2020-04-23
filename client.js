const NET = require('net');
const PROCESS = require('process');
const READLINE = require('readline');
const PORT = 2876;
PROCESS.stdin.setEncoding('utf8');

const NoIPError = 'An IP address must be entered.';
const InvalidIPError = 'Invalid IP address entered.';
const NoMessageContentError = 'A message must be entered.';

const RLINPUT = READLINE.createInterface({
    input: PROCESS.stdin,
    output: PROCESS.stdout
});

RLINPUT.question('IP to connect to: ', (host) => {
    if (host == null) {
        throw NoIPError;
    }

    if (NET.isIP(host) != 0 || host == 'localhost') {
        console.log('IP address correct. IP is ' + host);
        const CLIENT = new NET.Socket();
        CLIENT.connect(PORT, host, function() {
            console.log('CONNECTED TO: ' + host + ':' + PORT);
            RLINPUT.question('Enter the message you want to send: ', (data) => {
                if (data == null) {
                    throw NoMessageContentError;
                }
                else {
                        console.log('SENDING DATA: ' + data);
                        CLIENT.write(data);
                }
            });
        });
        CLIENT.on('close', function() {
            CLIENT.destroy();
            console.log('Connection closed.');
        });
    }
    else {
        throw InvalidIPError;
    }

    RLINPUT.close();
});