var globalGame;

function changeGameType(){
    var gameTypeButton = document.getElementById('typeOfGame')
    if (gameTypeButton.value == '6') {
        gameTypeButton.value = '10'
        gameTypeButton.innerHTML = '10 Números'
    }else{
        gameTypeButton.value = '6'
        gameTypeButton.innerHTML = '6 Números'
    }
}

function changeNumberOfGames(){
    var numberOfGamesButton = document.getElementById('numberOfGames')

    switch (numberOfGames.value) {
        case '1':
            numberOfGames.value = '3'
            numberOfGames.innerHTML = '3 Jogos'
            break;
        case '3':
            numberOfGames.value = '6'
            numberOfGames.innerHTML = '6 Jogos'
            break;
        // case '6':
        //     numberOfGames.value = '9'
        //     numberOfGames.innerHTML = '9 Jogos'
        //     break;
        case '6':
            numberOfGames.value = '1'
            numberOfGames.innerHTML = '1 Jogo'
            break;
    }
}

function play() {
    var numberOfGamesButton = document.getElementById('numberOfGames')
    var gameResultArea = document.getElementById('gameResult')
    gameResultArea.innerHTML = ''
    var games = []

    for (let j = 0; j < numberOfGamesButton.value; j++) {
        var newGame = generateNumbers(newGame)
        games.push(newGame) 
    }

    for (let main = 0; main < games.length; main++) {
        var gameArray = games[main]
        gameArray = orderArray(gameArray)
        gameArray = formatNumbers(gameArray)
        globalGame = gameArray;
        showResult(gameArray, gameResultArea)       
    } 
}

function generateNumbers(){
    var gameTypeButton = document.getElementById('typeOfGame')
    var newGame =[]
    for (let i = 0; i < gameTypeButton.value; i++) {
        var randomNumber = Math.floor(Math.random() * (60 - 1 + 1) ) + 1;
         if(newGame.find((number) => {return number == randomNumber}) == undefined){
             newGame.push(randomNumber)
         }else{ i-- }
    }
    return newGame
}

function orderArray(gameArray){
    
    for (let current = 0; current < gameArray.length; current++) {
        var currentElement = gameArray[current];
        
        for (let compare = 0; compare < gameArray.length; compare++) {                
            var compareElement = gameArray[compare];
            if (currentElement < compareElement) {
                var temp = gameArray[compare]
                gameArray[compare] = gameArray[current]
                gameArray[current] = temp
            }  
        }
    }
    return gameArray;
}

function formatNumbers(gameArray){
    for (let index = 0; index < gameArray.length; index++) {
        gameArray[index] = gameArray[index].toString()
        if (gameArray[index].length < 2) gameArray[index]= '0'+ gameArray[index]
    }
    return gameArray;
}

function showResult(gameArray, gameResultArea){
    
    var gameResult = gameArray.toString().replaceAll(',', '  ')
    gameResultArea.innerHTML += '<h1 class="gameNumbers">' + gameResult + '</h1>'
}
