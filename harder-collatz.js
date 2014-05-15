console.log("Joshua's Collatz");

function collatz(x) {
	seq = [];
	length = 0;
	console.log(x);
	while (x != 1) {
		if (x % 2 == 0) {
			x = x / 2;
		} else {
			x = 3 * x + 1;
		}
		seq.push(x);
	}
	return seq;
}

var start = 59;
var seq = collatz(start);
var length = seq.length;
//console.log("collatz(" + start + ") has " + length + " items");
console.log("collatz(%d) has %d items", start, length);
console.log(seq);
