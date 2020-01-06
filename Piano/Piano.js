

  var blackKeys=document.getElementsByClassName("black");

    for( var i=0 ;i < blackKeys.length ; i++){
      blackKeys[i].addEventListener("click", playBlackNote);
    }


function playBlackNote(){
  console.log("black key");
  var note= this.classList[0];
  console.log(note);

  var audio=document.getElementById("sound-"+note);
audio.play();
}

var whiteKeys= document.getElementsByClassName("white");
for(var i =0; i < whiteKeys.length ; i++){
whiteKeys[i].addEventListener("click", function(){ ;
  console.log("White Key");
  var note= this.classList[0];
  console.log(note);
  var audio=document.getElementById("sound-"+note);

  audio.play();

});






}
