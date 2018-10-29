var i = 0;
var txt = 'Eco-Dynamic Energy Research Group';
var speed = 200;

function raceTyping() {
  if (i < txt.length) {
    document.getElementById("EDERG").innerHTML += txt.charAt(i);
    i++;
	setTimeout(raceTyping, speed);
	 }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function cardFlip1(){
    $(".card1").toggleClass('flipped');
   };
function cardFlip2(){
    $(".card2").toggleClass('flipped');
   };
function cardFlip3(){
    $(".card3").toggleClass('flipped');
   };