var house= document.getElementById("house");
var style= house.getContext("2d");

style.fillStyle="blue";
style.fillRect(  125 ,200, 150,100);

style.fillStyle="green";
style.fillRect(  0 ,300, 400,400);

style.fillStyle= "darkblue";
style.beginPath()
style.moveTo(200,150);
style.lineTo(100,200);
style.lineTo(300,200);
style.fill();

style.fillStyle="white";

style. beginPath();

style.fillRect(137, 220, 30, 50);


style.fillStyle="white";

style.beginPath();

style.fillRect(230, 220, 30, 50);


style.fillStyle="black";

style.beginPath();

style.fillRect(185, 245, 30, 50);


style.fillStyle= "green";
style.beginPath()
style.moveTo(40,220);
style.lineTo(25,230);
style.lineTo(55,230);
style.fill();


style.fillStyle= "green";
style.beginPath()
style.moveTo(40,230);
style.lineTo(15,250);
style.lineTo(65,250);
style.fill();


style.fillStyle= "green";
style.beginPath()
style.moveTo(40,250);
style.lineTo(5,270);
style.lineTo(75,270);
style.fill();





style.fillStyle= "green";
style.beginPath()
style.moveTo(350,220);
style.lineTo(335,230);
style.lineTo(365,230);
style.fill();


style.fillStyle= "green";
style.beginPath()
style.moveTo(350,230);
style.lineTo(325,250);
style.lineTo(380,250);
style.fill();


style.fillStyle= "green";
style.beginPath()
style.moveTo(350,250);
style.lineTo(315,270);
style.lineTo(390,270);
style.fill();



style.lineWidth=2;
style.beginPath()
style.moveTo(152,220);
style.lineTo(152,270);
style.stroke();


style.lineWidth=2;
style.beginPath()
style.moveTo(245,220);
style.lineTo(245,270);
style.stroke();


style.lineWidth=2;
style.beginPath()
style.moveTo(136,245);
style.lineTo(167,245);
style.stroke();


style.lineWidth=2;
style.beginPath()
style.moveTo(230,245);
style.lineTo(260,245);
style.stroke();


style.fillStyle="yellow";
style.beginPath();
style.arc(100,70,15,0,2*Math.PI);
style.stroke();
style.fill();

var cloud=[350, 100, 350, 105, 352, 103, 351, 102];

style.lineWidth=0;

style.fillStyle="white";

for(var i=0; i<cloud.length; i+=2){

  style.beginPath();
  style.arc(cloud([i], cloud[i+1], 35,0,2*Math.PI));
  style.stroke();
}
