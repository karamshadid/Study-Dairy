var cards= [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,
  11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14
];


function hit(){
  var number=Math.floor(Math.random()*cards.length);
  var random= cards[number];
  cards.splice(number,1);
  console.log(cards);

//  for(var i=0; i<cards.length; i++);
document.getElementById("deal").innerHTML=random;
}

function stop(){

  var next= cards[Math.floor(Math.random()*cards.length)];
  document.getElementById("deal2").innerHTML=next;


}
