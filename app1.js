
// external style sheet app1.js



function circle(radius)
 {
this.radius = radius;
this.area = function()
{
return Math.PI * this.radius * this.radius;
};	
}//body

var c = new circle(7);
console.log('Area = ' , c.area().toFixed(0));
