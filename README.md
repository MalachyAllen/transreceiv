# transreceiv

### What is transreceiv?
transreceiv is a data packet transmitter/receiver backend created in JavaScript using NodeJS.

### Sounds cool, what can I do with it?
You should be able to use transreceiv as either a standalone tool (although it pretty much won't be able to do anything of any significance on its own) or you can implement it into your JS frontend.

### Why did you make transreceiv?
I made transreceiv as a challenge after I learned the basics of JavaScript. The goal after this is to further develop transreceiv and implement it into my own chat application.

### How does it work?
Well, it goes like this:
* A data packet is created by the user who has access to the transmitter
* The packet is sent using the transmitter
* The recipient of the packet will receive the data packet via the receiver
* The readable data is output to the recipient

### Will there be graphical clients instead of the included command line one?
Yes! A client created by me will be made: [Supernova](https://github.com/SamFujisaki/supernova), however I assure you that there is no consequences for using a custom client. In fact, I suggest you make your own client instead of using my one!

Clients are made using the [Electron framework](https://electronjs.org) and need to include the transreceiv folder in the root of your Electron project. Although the ability to create your own clients is a nice thing to have, I must warn you that I will **not** maintain any clients other than Supernova. Security of the third-party clients falls down to you, other programmers and more importantly the original developer of the client.

### License
transreceiv is licensed under the MIT License, which can be found [here](https://opensource.org/licenses/mit) or at the LICENSE file.
