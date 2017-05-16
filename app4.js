
function outer() {
	var a = "Hello World From outer FUNCTION";
	console.log(a); // outer function
	function inner() {
		var b = "Hello World From Inner FUNCTION";
		console.log(b); // inner function
	
	}
	inner();
}
outer();