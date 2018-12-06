var wordList = ["pokemon", "mario", "zelda", "metroid", "minecraft",
    "paperboy", "tetris", "contra", "castlevania", "fortnite", "uncharted", "spiderman"];
var wins = 0;
var losses = 0;
var lives = 7;
var word = "";
var guess = "";
var lettersGuessed = [];
var displayedWord = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var pick = "Pick a Letter";
var lost = "Sorry, you lost...";
var won = "You Won!";
var gameover = true;
var pressStart = "Press Start"
var hitReset = "Press Reset to play again.";
var audio = new Audio("assets/music/castlevania.mp3"); 

scoreFunction ();
alert("Start button on controller, reset button on console");

function buttons() {
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
function clear(){
    document.getElementById("letterButtons").innerHTML = "";
    document.getElementById("displayWord").innerHTML = "";
    document.getElementById("replay").innerHTML = "";
    audio.pause();
}
function contains(arr, el) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == el) { return true }
    }
    return false
}
function getWord () {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    gameover = false;
}
function letterSelect () {
    var letter = event.target.innerHTML;
    if (!contains(lettersGuessed, letter)){
        lettersGuessed.push(letter);
        if (!contains(word, letter)) {
            lives -= 1;
            scoreFunction();
        }
        var l = event.target;
        console.log(l);
        event.target.classList.add("active");
        run();
}}
function renderDisplayedWord () {
    displayedWord = "";
    for (var i = 0; i < word.length; i++) {
        if (contains(lettersGuessed, word[i])) {
            displayedWord += word[i];
        }
        else {
            displayedWord += "_";
        }
    }
    document.getElementById("displayWord").innerHTML = displayedWord;
}
function run () {
    renderDisplayedWord();
    testResult();
}
function scoreFunction () {
    document.getElementById("userWins").innerHTML=wins;
    document.getElementById("userLosses").innerHTML=losses;
    document.getElementById("userLives").innerHTML=lives;
}
function startListen(){
    document.getElementById("alphabet").onclick = function() {
    letterSelect()};
}
function testResult () {
    if (!contains(displayedWord, "_")) {
        wins++
        document.getElementById("letterButtons").innerHTML = "";
        document.getElementById("replay").innerHTML = hitReset;
        win ();
        scoreFunction();
    }
    if (lives <= 0) {
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/gameOver.jpg"/>';
        document.getElementById("topDisplay").innerHTML = lost;
        document.getElementById("letterButtons").innerHTML = "";
        document.getElementById("replay").innerHTML = hitReset;
        losses++
        scoreFunction();
        audio = new Audio("assets/music/gameover.mp3");
        audio.play();
    }
}
function win () {
    if (displayedWord === "castlevania"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/castlevania.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Castlevania";
        audio = new Audio("assets/music/castlevania.mp3");
        audio.play();
    }else if (displayedWord === "contra"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/contra.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Contra";
        audio = new Audio("assets/music/contra.mp3");
        audio.play();
    }else if (displayedWord === "fortnite"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/fortnite.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Fortnite";
    }else if (displayedWord === "mario"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/mario.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Super Mario Bros.";
        audio = new Audio("assets/music/mario.mp3");
        audio.play();
    }else if (displayedWord === "metroid"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/metroid.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Metroid";
        audio = new Audio("assets/music/metroid.mp3");
        audio.play();
    }else if (displayedWord === "minecraft"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/minecraft.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Minecraft";
        audio = new Audio("assets/music/minecraft.mp3");
        audio.play();
    }else if (displayedWord === "paperboy"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/paperboy.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Paperboy";
        audio = new Audio("assets/music/paperboy.mp3");
        audio.play();
    }else if (displayedWord === "pokemon"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/pokemon.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Pokemon";
        audio = new Audio("assets/music/pokemon.mp3");
        audio.play();
    }else if (displayedWord === "spiderman"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/spiderman.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Spider-Man";
        audio = new Audio("assets/music/spiderman.mp3");
        audio.play();
    }else if (displayedWord === "tetris"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/tetris.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Tetris";
        audio = new Audio("assets/music/tetris.mp3");
        audio.play();
    }else if (displayedWord === "uncharted"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/uncharted.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "Uncharted";
        audio = new Audio("assets/music/uncharted.mp3");
        audio.play();
    }else if(displayedWord === "zelda"){
        document.getElementById("tvImg").innerHTML = '<img id="screen" src="assets/images/zelda.jpg"/>';
        document.getElementById("topDisplay").innerHTML = won;
        document.getElementById("displayWord").innerHTML = "The Legend of Zelda";
        audio = new Audio("assets/music/zelda.mp3");
        audio.play();
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