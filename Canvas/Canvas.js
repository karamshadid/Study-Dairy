var canvas=document.getElementById("canvas");
var ctx= canvas.getContext("2d");

ctx.fillStyle="rgb(14, 236, 223)"

ctx.fillRect(100,100,200,200);//x axis, y axis, width, height
ctx.lineWidth=5;
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.stroke();

ctx.lineWidth=5;
ctx.moveTo(400,0);
ctx.lineTo(0,400);
ctx.stroke();

//....................
//triangle
ctx.fillStyle="yellow";
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(50,50);
ctx.lineTo(0,100);
ctx.fill();

ctx.fillStyle="rgb(41, 48, 210)";
ctx.beginPath();
ctx.moveTo(100,300);
ctx.lineTo(200,200);
ctx.lineTo(100,100);
ctx.fill();

ctx.fillStyle="rgb(41, 48, 210)";
ctx.beginPath();
ctx.moveTo(100,300);
ctx.lineTo(200,200);
ctx.lineTo(100,100);
ctx.fill();

// circle

ctx.lineWidth=5;
ctx.beginPath();
ctx.arc(200,200,100,0,2*Math.PI);
ctx.stroke();
