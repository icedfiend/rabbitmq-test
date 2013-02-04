var context = require('rabbit.js').createContext();

var start, end;

console.log("Producer - Creating context");

context.on('ready', function() {
	console.log("Context Ready");

	var pub = context.socket('PUB');
	pub.connect('events', function() {
		console.log("Connected to events");

		start = new Date();
		end = start.getTime() + 10000;
		console.log("Start Sending", start.getTime());
		while(end >= (new Date()).getTime()){
			pub.write(JSON.stringify({welcome: 'rabbit.js'}), 'utf8');
		}
		pub.write(JSON.stringify({"end": 1}))
		console.log("Finish Sending", end);
	});
});

