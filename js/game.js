let objects = ['JUPITER', 
               'ASTEROID', 
               'NEBULA', 
               'GALAXY', 
               'ANDROMEDA', 
               'SATELLITE', 
               'HELIX',  
               'PLANET'];
let maxMistake = document.getElementById('maxMistake');
let mistakes = document.getElementById('mistakes');
let container1 = document.getElementById('container1');
let container2 = document.getElementById('container2');
let pressKey = document.getElementById('press-key');
let object = objects[Math.floor(Math.random() * objects.length)];
let letters = document.getElementById('letters');
let alphabet = document.getElementById('alphabet')
let answer = [];

maxMistake.innerHTML = 6
mistakes.innerHTML = 0

for (let i = 0; i < object.length; i++) {
 answer[i] = "_";
}
letters.innerHTML = answer.join(' ')

$(document).ready(function(){
    let buttons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `<button class='btn btn-primary px-2 py-2 mx-1 my-1' id="`+letter+`" onclick="guessedLetter(this)">`+letter+`</button>`).join('')
        alphabet.innerHTML = buttons;
});

function guessedLetter(x){
    y = object.toLowerCase()
    pressKey.style.display = 'none'
    if(mistakes.innerHTML < 6){
        if(y.includes(x.innerHTML) == false){
        mistakes.innerHTML = parseInt(mistakes.innerHTML)+1; 
        x.disabled = true;  
        }else{
                for(let i = 0; i < object.length; i++){
                    if(y[i] == x.innerHTML){
                        answer[i] = x.innerHTML;
                        letters.innerHTML = answer.join(' ');
                        x.disabled = true;  
                        if(answer.includes('_') == false){
                            container1.innerHTML = '<p class="blink text-warning fs-1 my-5 py-5">YOU WON!</p>';
                            container2.innerHTML = '<a href="index.html" class=" btn btn-secondary text-warning fs-4">Restart</a>'
                        };
                    }; 
                    };
                };
    }else{
        container1.innerHTML = '<p class="blink text-warning fs-1 my-5 py-5">GAME OVER!</p>';
        container2.innerHTML = '<a href="index.html" class=" btn btn-secondary text-warning fs-4">Restart</a>'

    };
};

