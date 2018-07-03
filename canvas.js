console.log("hello");

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//RECTANGLES
// c.fillStyle = 'rgba(255, 0, 0, .5)';
// c.fillRect(100, 100, 50, 50);
// c.fillStyle = 'rgba(0, 255, 0, .5)';
// c.fillRect(400, 150, 50, 50);
// c.fillStyle = 'rgba(0, 0, 255, .5)';
// c.fillRect(300, 300, 50, 50);

//LINE
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "white";
// c.stroke();

//ARC OR CIRCLE
c.beginPath();
c.arc(120, 350, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'white';
c.stroke();

//RANDOMLY GENERATED CIRCLES
// for (i=0; i < 5; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI * 2, false);
// 	c.strokeStyle = 'white';
// 	c.stroke();
// }