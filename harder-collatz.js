console.log("Joshua's Collatz");

function collatz(x) {
	seq = [x];
	while (x > 1) {
		if (x % 2 == 0) {
			x = x / 2;
		} else {
			x = 3 * x + 1;
		}
		seq.push(x);
	}
	return seq;
}

if (isNaN(process.argv[2])) {
	console.log("Usage : collatz starting-number (default is 10)");
	var start = 10;
} else {
	var start = parseInt(process.argv[2]);
}

//var start = isNaN(process.argv[2]) ? 10 : parseInt(process.argv[2]);

var seq = collatz(start);
var length = seq.length;
console.log(seq);
console.log("collatz(%d) has %d items", start, length);
