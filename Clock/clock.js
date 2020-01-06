var canvas= document.getElementById("canvas");
var style= canvas.getContext("2d");
var radius= canvas.height/2;
style.translate(radius,radius);
radius=radius*0.90
setInterval(drawClock,1000);

function drawClock(){
drawFace(style,radius);
drawNumbers(style,radius);
drawTime(style, radius);

  }

  function drawFace(style,radius){
var grad;
style.beginPath();
style.arc(0,0,radius,0, 2*Math.PI);
style.fillStyle="white";
style.fill();
grad= style.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
grad.addColorStop(0, "#333")
grad.addColorStop(0.5, "yellow");
grad.addColorStop(1, "blue");
style.strokeStyle=grad;
style.lineWidth=radius*0.1;
style.stroke();

style.beginPath();
style.arc(0,0,radius*0.1,0,2*Math.PI);

style.fillStyle="#333";
style.fill();

  }

  function drawNumbers(style,radius){
var ang;
var num;
style.font=radius*0.15+"px arial";
style.textAlign="center";
style.textBaseline="middle";
for(num=1; num<13; num++){
  ang=num*Math.PI/6;
  style.rotate(ang);
  style.translate(0,-radius*0.85);
  style.rotate(-ang);

  style.fillText(num.toString(),0,0);
  style.rotate(ang);
  style.translate(0,radius*0.85);
  style.rotate(-ang);

}


  }
  function drawTime(style,radius){

    var now= new Date();
    var hour= now.getHours();
    var minute= now.getMinutes();
    var second=now.getSeconds();
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));

drawHand(style,hour,radius*0.5,radius*0.07);
minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
drawHand(style,minute,radius*0.8,radius*0.07);

second= (second*Math.PI/30);
drawHand(style,second,radius*0.9,radius*0.02);

  }
  function drawHand(style, pos, length, width){
    style.beginPath();
    style.lineWidth=width;
    style.lineCap="round";
    style.moveTo(0,0);
    style.rotate(pos);
    style.lineTo(0,-length);
    style.stroke();
    style.rotate(-pos);
  }
