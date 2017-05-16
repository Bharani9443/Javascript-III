var increment = (function ()
{
	var a=1;
	return function()
	{
		a += 1;
		return a;
	}
}());
console.log('increment value = ' + increment());
console.log('increment value = ' + increment());
console.log('increment value = ' + increment());
console.log('increment value = ' + increment());
console.log('increment value = ' + increment());