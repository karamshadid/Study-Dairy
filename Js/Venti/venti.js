var cards= [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,
  11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14
];

var player=[];
function hit(){

  var number=Math.floor(Math.random()*cards.length);
  var random= cards[number];
  player.push(random);
  cards.splice(number,1);
  if(sum()<=21 && sum2<sum()){
    document.getElementById("option1").innerHTML= "you win" + sum();}

    else if (sum() >21) {
      document.getElementById("option1").innerHTML= "Bust" + sum();  }
      else{ "Its a tie";}

  }



console.log(player);



function sum(){

  var sum= 0;
  for(var i =0; i< player.length;i++ ){
    sum+=player[i];

  }
  return sum;

}
  var sum2=0;
  var dealer=[];
function stop(){


   while(sum2<sum()&& sum2<21){
     var number2=Math.floor(Math.random()*cards.length);
     var random2= cards[number2];
     dealer.push(random2);
     cards.splice(number2,1)
console.log(dealer);

           sum2+=dealer[dealer.length-1];
console.log(sum2);

 }


   document.getElementById("Dealer").innerHTML=sum2;

}
