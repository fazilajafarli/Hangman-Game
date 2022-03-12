let objects = ['JUPITER', 'ASTEROID', 'NEBULA', 'GALAXY', 'ANDROMEDA', 'SATELLITE', 'HELIX', 'BUTTERFLY', 'PLANET'];
let object = '';
let maxMistake = 6;
let mistakes = 0;
let guesses = [];
let wordStatus = null;


function randomObject(){
    object = objects[Math.floor(Math.random() * objects.length)];
    
}

function alphabets(){
    let buttons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `<button class='btn btn-primary px-2 py-2 mx-1 my-1' id='`+ letter + `' onclick='guessedLetter('`+ letter + `') > `+ letter +` </button>
        `).join('')
    document.getElementById('alphabet').innerHTML = buttons;
}
function guessedLetter(selectedLetter){
    guesses.indexOf(selectedLetter) === -1 ? guesses.push(selectedLetter): null;
    document.getElementsByClassName(selectedLetter).setAttribute('disabled', true);

    if(object.indexOf(selectedLetter) >= 0){
        guessedWord();
    } 


}

function guessedWord(){
    wordStatus = object.split('').map(letter => (guesses.indexOf(letter) >= 0 ? letter: '_')).join(' ');
    document.getElementById('word').innerHTML = wordStatus;
}

document.getElementById('maxMistake').innerHTML = maxMistake;

randomObject()
guessedWord()
alphabets()