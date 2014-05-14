console.log("Joshua's Collatz");

function collatz(x) {
	length = 0;
	console.log("x");
	while (x != 1) {
		if (x % 2 == 1) {
		} else {
		}
		console.log("x");
		++length;
	}
	return length;
}

var start = 59, length = collatz(start);
console.log("collatz(%d) has items", start);
