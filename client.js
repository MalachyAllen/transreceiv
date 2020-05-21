const NET = require('net');
const PROCESS = require('process');
const READLINE = require('readline');
const PORT = 2876;
PROCESS.stdin.setEncoding('utf8');

const NoIPError = 'An IP address must be entered.';
const InvalidIPError = 'Invalid IP address entered.';
const NoMessageContentError = 'A message must be entered.';

const RLInputClosedError = 'Readline Input was closed.';

const RLINPUT = READLINE.createInterface({
    input: PROCESS.stdin,
    output: PROCESS.stdout
});

function RLQUESTION(rl, question) {
	return new Promise((resolve, reject) => {
		function closeListener() {
			reject(RLInputClosedError);
		}
		rl.once('close', closeListener);
		rl.question(question, (answer) => {
			rl.off('close', closeListener);
			resolve(answer);
		});
	})
}

function UNTILEVENT(emitter, event) {
	return new Promise((resolve, reject) => {
		emitter.once(event, (...a) => resolve(...a))
	});
}

;(async () => {
	const host = await RLQUESTION(RLINPUT, 'IP to connect to: ');
	if (host == null) {
		RLINPUT.close();
		throw NoIPError;
	}
	console.log('Received remote: ' + host);

	const CLIENT = new NET.Socket();
	CLIENT.connect(PORT, host, function() {
		console.log('CONNECTING TO: ' + host + ':' + PORT + '...');
	});
	CLIENT.on('connect', function() {
		console.log('CONNECTION ESTABLISHED AT: ' + host + ':' + PORT);
	});

	CLIENT.on('close', function() {
		CLIENT.destroy();
		RLINPUT.close();
		console.log('Connection closed.');
	});

	await UNTILEVENT(CLIENT, 'ready');

	try {
		const data = await RLQUESTION(RLINPUT, 'Enter the message you want to send: ');
		if (data == null) {
			throw NoMessageContentError;
		} else {
			CLIENT.write(data, 'utf-8');
		}
	} catch(e) {
		console.log(e === RLInputClosedError ? '<close signal>' : '');
		CLIENT.destroy();
		if(e !== RLInputClosedError)
			throw e;
	}
})()
