// Hangman!

var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// console.log(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])

//
var gameOfThrones =["longclaw", "khaleesi", "dragons", "winter", "lannister", "bastard", "baratheon", "stark"]

var numWins = 0
var numLosses = 0
var guessTally = 0
var maxGuesses = 6
var randWord = gameOfThrones[Math.floor(Math.random() * gameOfThrones.length)]
// var usedLetters = letterChoices[Math.floor(Math.random() * letterChoices.length)]

console.log(randWord)
// console.log(usedLetters)

// on key events
// document.onkeyup = function (event) {

//     var userGuess = event.key 

//     // if (randWord === "Longclaw") {
//     //     letterChoices === "l", "o", "n", "g", "c", "a", "w"
//     // }

//     // else {
//     //     alert("Your Watch Has Ended")
//     // }

//     console.log(event)


// }

var answerArray= []
for (var i=0; i <randWord.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = randWord.length;

while(remainingLetters > 0) {
    alert(answerArray.join(""))
    var guess = prompt("Guess a letter or click cancel to stop playing")

    if(guess === null) {
        break;
    }
    else if(guess.length !==1) {
        alert("Type to start playing!")
    }
    else {
        for (var j = 0; j < randWord.length; j++) {
            if (randWord[j] === guess) {
                answerArray[j] = guess
                remainingLetters--
            }
        }
    }
}

