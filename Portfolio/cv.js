window.onscroll = function() {
  scrollFunction()
};


function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("icon").style.display = "block";
  } else {
    document.getElementById("icon").style.display = "none";
  }
}

function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function topnavfunction() {
  var x = document.getElementById("mobTopNav");
  if (x.className == "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

}
