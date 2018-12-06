var wordList = ["pokemon", "mario", "zelda", "metroid", "minecraft",
    "paperboy", "tetris", "contra", "castlevania", "fortnite", "uncharted", "spiderman"];
var wins = 0;
var losses = 0;
var lives = 7;
var word = "";
var guess = "";
var wrongGuess = [];
var rightGuess = [];
var lettersGuessed = [];
var displayedWord = "";
// var letter_buttons = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var pick = "Pick a Letter";
var lost = "Sorry, you lost...";
var won = "You Won!";
var gameover = true;
var pressStart = "Press Start" 

scoreFunction ();
// alert("Start button on controller, reset button on console");

function startGame () {
    gameover = false;

}
function scoreFunction () {
    document.getElementById("userWins").innerHTML=wins;
    document.getElementById("userLosses").innerHTML=losses;
    document.getElementById("userLives").innerHTML=lives;
};
function getWord () {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    gameover = false;
}
var buttons = function () {
    myButtons = document.getElementById("letterButtons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letters";
      list.innerHTML = alphabet[i];
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
}
function letterSelect () {
    var letter = event.target.innerHTML;
    console.log(letter);
    lettersGuessed.push(letter);
    if (!contains(word, letter)) {
        lives -= 1;
        scoreFunction();
    }
    console.log(letter);
    console.log(lettersGuessed)
    run();
}
function contains(arr, el) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == el) { return true }
    }
    return false
}
function run () {
    renderDisplayedWord();
    testResult();
    // if (gameover) {
    //     DOM_game_message.innerHTML = game_complete;
    // }
    // renderButtons(game_complete);
}
function renderDisplayedWord () {
    displayedWord = "";
    for (var i = 0; i < word.length; i++) {
        if (contains(lettersGuessed, word[i])) {
            displayedWord += word[i];
        }
        else {
            displayedWord += "_";
        }
        // displayedWord += (i == word.length) ? "" : " " ;
    }
    document.getElementById("displayWord").innerHTML = displayedWord;
}
function testResult () {
    if (!contains(displayedWord, "_")) {
        wins++
        document.getElementById("letterButtons").innerHTML = "";
        win ();
        scoreFunction();
    }
    if (lives <= 0) {
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/gameOver.jpg"/>';
        document.getElementById("topDisplay").innerHTML = lost;
        document.getElementById("letterButtons").innerHTML = "";
        losses++
        scoreFunction();
    }
}
function win () {
    if (displayedWord === "castlevania"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/castlevania.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "contra"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/contra.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "fortnite"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/fortnite.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "mario"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/mario.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "metroid"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/metroid.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "minecraft"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/minecraft.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "paperboy"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/paperboy.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "pokemon"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/pokemon.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "spiderman"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/spiderman.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "tetris"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/tetris.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if (displayedWord === "uncharted"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/uncharted.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }else if(displayedWord === "zelda"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/zelda.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
    }
}




document.getElementById("resetButton").onclick = function() {
    document.getElementById("topDisplay").innerHTML = pressStart;
    document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/standBy.jpg"/>';
    clear();
    lives = 7;
    scoreFunction();
    gameover=true;
    lettersGuessed = [];
}  
document.getElementById("startButton").onclick = function() {
    if (gameover == true){
    document.getElementById("topDisplay").innerHTML = pick;
    document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/questionMark.jpg"/>';
    clear();
    buttons();
    scoreFunction();
    getWord();
    renderDisplayedWord ()
    startListen();
}}
function startListen(){
    document.getElementById("alphabet").onclick = function() {
    letterSelect()};
}
function clear(){
    document.getElementById("letterButtons").innerHTML = "";
    document.getElementById("displayWord").innerHTML = "";
}