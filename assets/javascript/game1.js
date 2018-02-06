//Current issues:
// limited button functionality, words are not generated along with the spaces that should appear when the game has started
//getting keyboard event error message stating not defined when the enter button is pressed
//unable to determine whether the number of wins will calculate properly as a result of the first issue
$(document).ready(function () {

    var wins = 0
    var maxGuess = 8
    var maxGuessCount = 0
    var gotWords = ["longclaw", "greyjoy", "tyrell", "hodor", "khaleesi", "dragons", "dothraki", "winter", "lannister", "bastard", "baratheon", "stark"]

    var rightLtrsArr = []
    var randWord
    var randWordArr = []
    var tempSpace = ""
    var positions = [], i
    var randWordLngth
    var allGuesses = []
    var guessedWord
    var splitRandWordArr = []

    //Game Begins

    function startGame() {

        //number of wins
        $("winCountBox").html(wins)
        //clear wins
        $("#wrongGuessList").empty()

        //call new word from the array
        $("#userInput").attr("disabled", true)

        //clear guesses counted
        $("#guessesLeftBox").empty()

        //clear current word
        $("#wordBox").empty()

        //clear previous letters guessed
        allGuesses = []
    }



    //Start the Game over

    function resetGame() {
        //reset wins back to zero
        wins = 0

        //return to start game
        startGame()
    }

    //Grabbing a word from the array

    function getWord() {
        randWordArr.length = 0;

        startGame()

        //grabbing new word
        randWord = gotWords[Math.floor(Math.random() * gotWords.length)]
        randWordLngth = randWord.length
        randWordArr.push(randWord)
        console.log("rand word arr is " + randWordArr)

        //black spaces for the random word pulled
        tempSpace = ""
        for (var i = 0; i < randWordLngth; i++) {
            tempSpace = tempSpace + "_"
        }

        $("#wordBox").html(tempSpace)

        //returns max geusses and number of guesses entered to 0

        guessCount = 0
        maxGuessCount
        $("#guessesLeftBox").html("0 / " + maxGuessCount)

        //places incorrect guesses into box for player view
        $("#wrongGuessList").empty()

        //enter letters into fields
        $("#userInput").attr("disabled", false)

        //removes correctly guessed letter from the array
        rightLtrsArr = []
    }

    //all indexes within the array
    function getAllIndexes(word, val) {
        positions = []
        for (i = 0; i < word.length; i++) {
            if (word[i] === val) {
                positions.push(i)
            }
        }
    }
    // start game

    $("#getWordBTN").on("click", function () {
        startGame()
    })

    //replace function 

    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length)
    }

    // reset button
    $(".resetGameBTN").on("click", function () {
        resetGame()
    })

    //new word
    $("#getWordBTN").on("click", function () {
        getWord()
    })


    // $(document).keypress(function (e) {
    //     if (e.which == 13) {
    //         $(".inputBTN").on()
    //     }
    //     console.log(keypress())
    // })

    //checks and balances in events
    $("#inputBTN").on("click", function () {

        //if user enters capital, change to lowercase
        var userInput = $("input").val().toLowerCase()
        $("input").val("")

        //verify a single letter has been entered, error for multiple inputs
        function isSingleInput(userInput) {
            if (userInput.length === 1) {
                //verify string
                function isNumber(x) {
                    if (isNaN(x)) {
                        //check if already guessed
                        if (allGuesses.indexOf(userInput) >= 0) {
                            alert("A player forgets a letter has already been guessed...")
                            return
                        }
                        else {
                            allGuesses.push(userInput)
                        }

                        //check if input is inside the random word array
                        var isCharInWord = randWord.indexOf(userInput)

                        if (isCharInWord >= 0) {

                            if ($.inArray(userInput, randWordArr)) {

                                getAllIndexes(randWord, userInput)

                                //positions of correctly guessed letters
                                for (var i = 0; i < positions.length; i++) {
                                    var x = parseInt(positions[i])
                                    tempSpace = tempSpace.replaceAt(x, userInput)
                                    rightLtrsArr.push(userInput)
                                }

                                //show spaces on screen
                                $("#wordBox").html(tempSpace)

                                //word check
                                splitRandWordArr = randWord.split("")
                                splitRandWordArr.sort()
                                rightLtrsArr.sort()

                                if (rightLtrsArr.length === splitRandWordArr.length) {
                                    $("#userInput").attr("disabled", true)
                                    alert("Victorious! The Iron Throne is yours... for now.")
                                    wins++
                                    $("#winCountBox").html(wins)
                                }
                            }
                        }
                        else {
                            //wrong guesses
                            $("#wrongGuessList").append("<li class='list-group-item'>" + userInput + "</li>")
                            guessCount++
                            $("guessesLeftBox").html(guessCount + " / " + maxGuess)

                            //out of tries
                            if (guessCount === maxGuess) {
                                alert("What is dead may never die. Generate a new word and try again.")
                            }
                        }
                    }
                }
            }
        }
    })
})  