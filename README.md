# transreceiv

### What is transreceiv?
Transreceiv is a data packet transmitter and receiver created in JavaScript using NodeJS.

### Sounds cool, what can I do with it?
Well, once development is complete, you should be able to use transreceiv as either a standalone tool (although it pretty much won't be able to do anything of any significance on its own) or you can implement it into your JS frontend/backend.

### Why did you make transreceiv?
I made transreceiv as a challenge after I learned the basics of JavaScript. The goal after this is to further develop transreceiv and implement it into my own chat application.

### How does it work?
Well, nothing's concrete yet, but so far it goes like this:
* A data packet is created by the user who has access to the transmitter
* The packet is sent using the transmitter
* The recipient of the packet will receive the data packet via the receiver
* The received data packet is converted into readable data
* The readable data is output to the recipient

transreceiv will use the TCP socket to send data (SOCK_STREAM).
