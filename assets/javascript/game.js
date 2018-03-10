//I tired to copy an dput code into javascript file but it doesnt open.

    /*app randomly picks a letter 
    user has to guess which letter was chosen 
    display instructions, scores
    increase scores as needed
    reset game when declared a winner
    */

   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

   var wins=0;
   var losses=0;
   var guessLeft;
   var guessFar = [];

   var computerGuess= "";
    
   function startGame(){
guessLeft =10;
guessFar= [];
computerGuess= alphabet[Math.floor(Math.random() * alphabet.length)];

renderPage();
   }
function checkGuess(userGuess, computerGuess){
    if(guessFar.indexOf(userGuess)!==-1) return;//doesn't allow duplicate

//if_else statement for the wins & losses
if(userGuess==computerGuess){
    wins++;
    alert("Winner!");
startGame();
}

else if(guessLeft >1){
    guessFar.push(userGuess);
    guessLeft--;
    renderPage();
}
else {
    losses++;
    alert("Sorry, please try again"); 
    startGame();
}
}


function renderPage(){
    var html= "<p>Press any letter to start playing</p>" + 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessLeft + "</p>" +
    "<p>Your guesses so far: " + guessFar.join(" ") + "</p>";

document.querySelector("#psychic").innerHTML = html;

}
 


document.onkeyup=function(event){
       var userGuess=String.fromCharCode(event.keyCode).toLowerCase(); 


           checkGuess(userGuess, computerGuess);//calls function
       }

       startGame();