//--------------------------------------------------------------------
//- Actual Coursework
//--------------------------------------------------------------------

// Variable declarations ---------------------------------------------
let isCorrect = false;
let score = 0;
let i = 0;
let maxAttempts;
let userInput = '';
let wordToWrite = '';

// functions ---------------------------------------------------------
function getScore(score, maxAttempts){
    let message = 'You got: ' + score + '/' + maxAttempts; // fix for both phrase & words
    return message;
}

function chooseWordsOrPhrases(selectedOption){
    let choix = prompt('Souhaitez vous des mots ou des phrases?')
    while (choix !== 'mots' && choix !== 'phrases')
        choix = prompt('Veuillez entrer [mots] ou [phrases]');
    return choix;
}

function startGameLoop(){

}

// algo loop ---------------------------------------------------------
if (choix === 'mots'){
    maxAttempts = allWords.length;
    for (let currentTry = 0; currentTry <= maxAttempts; currentTry++){
        wordToWrite = allWords[i];
        isCorrect = false;
        userInput = prompt('Please enter the word: ' + wordToWrite)
        if (userInput === wordToWrite){
            console.log('Good Job!');
            isCorrect = true;
            score++;
        } else
            console.log('Bouboubou, the word was: ' + wordToWrite);
        i++;
    }
} else if (choix === 'phrases'){
    maxAttempts = allPhrases.length;
    for (let currentTry = 0; currentTry < maxAttempts; currentTry++){
        phraseToWrite = allPhrases[i];
        isCorrect = false;
        userInput = prompt('Please enter the word: ' + phraseToWrite)
        if (userInput === phraseToWrite){
            console.log('Good Job!');
            isCorrect = true;
            score++;
        } else
            console.log('Bouboubou, the phrase was: ' + phraseToWrite);
        i++;
    }
}
// Displays result after algo execution ------------------------------
console.log(getScore(score, maxAttempts));