// Variable declarations ---------------------------------------------
let isCorrect = false;
let i = 0;
let score = 0;
let maxAttempts;
let userInput = '';
let wordToWrite = '';

// functions ---------------------------------------------------------
// returns the score out of the total number of propositions to type
function getScore(score, maxAttempts){
    let message = 'You got: ' + score + '/' + maxAttempts; // fix for both phrase & words
    return message;
}

// allows the user to choose to type words or sentences, then returns the choice
function chooseWordsOrPhrases(){
    let choix = prompt('Souhaitez vous des mots ou des phrases?')
    while (choix !== 'mots' && choix !== 'phrases')
        choix = prompt('Veuillez entrer [mots] ou [phrases]');
    return choix;
}

// initializes necessary variables to start the game loop, then returns the score
function startGameLoop(elementsToType){
    for (let currentTry = 0; currentTry < maxAttempts; currentTry++){
        wordToWrite = elementsToType[i];
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
    return score;
}

// ties in all abopve functions to allow the user to play
function launchGame(){
    let choix = chooseWordsOrPhrases();

    if (choix === 'mots'){
        maxAttempts = allWords.length;
        score = startGameLoop(allWords);
    }
    else if (choix === 'phrases'){
        maxAttempts = allPhrases.length;
        score = startGameLoop(allPhrases);
    }
}