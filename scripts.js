function add( x ) {
	return x + 2;
}

function multiply( x ) {
	return x * 3;
}

function subtract( x ) {
	return x - 4;
}

console.log(add(multiply(subtract(100))));
