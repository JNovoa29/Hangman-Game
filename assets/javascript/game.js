// // Hangman!


// // console.log(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])

// //

// // var guessLeft = document.getElementById("guessesleft")

// // examples to add text pulling from html
// //  var myString = "Some Text"
// //     myString.innerHTML = "<h1>" + myString + "</h1>"
// // var newDiv = document.createElement("div")
// // newDiv.innerHTML = "<h3> Some more text for you </h3>"
// // targetDiv.appendChild(newDiv) 
// // referencing css 
// // targetDiv.setAttribute("class", "changeColor") 

// // console.log(usedLetters)

// // on key events
// // document.onkeyup = function (event) {

// //     var userGuess = event.key 

// //     // if (randWord === "Longclaw") {
// //     //     letterChoices === "l", "o", "n", "g", "c", "a", "w"
// //     // }

// //     // else {
// //     //     alert("Your Watch Has Ended")
// //     // }

// //     console.log(event)


// // }
// document.addEventListener("DOMContentLoaded", function() {
//     var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//     var gameOfThrones =["longclaw", "greyjoy", "tyrell", "hodor", "khaleesi", "dragons", "dothraki", "winter", "lannister", "bastard", "baratheon", "stark"]
//     var numWins = 0
//     var guessLeft = 0
//     var lettersGuessed = 8
//     var randWord = gameOfThrones[Math.floor(Math.random() * gameOfThrones.length)]
    
//     console.log(randWord)
       
   
   
//     var answerArray= []
//     for (var i=0; i <randWord.length; i++) {
//         answerArray[i] = "_";
//     }
    
//     var remainingLetters = randWord.length;
    
//     while(remainingLetters > 0) {
//         //press a key to start the game
//         alert(answerArray.join(""))
//     //takes player guess and saves to variable guess below depending on player choice
//         var guess = prompt("Guess a letter or click cancel to stop playing")
//     //cancel button
//         if(guess === null) {
//             break;
//         }
//         //guess exceeds one letter
//         else if(guess.length !==1) {
//             alert("Only one letter...")
//         }
//         //update game with guess entered
//         else {
//             for (var j = 0; j < randWord.length; j++) {
//                 if (randWord[j] === guess) {
//                     answerArray[j] = guess
//                     remainingLetters--
//                 }
//                 else {
                    
//                 }
                
//             }
//         }
//     }
//     });

