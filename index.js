let human_score = 0
let computer_score = 0


function rps(item) {
    let computer_item = randomItem()
    let results = processResults(item, computer_item)
    if (human_score === 5 || computer_score === 5) {
        gameOver()
    } else {
        document.getElementById("result").innerHTML = results
    }
}

function randomItem() {
    // choose random item
    let items = ['rock', 'paper', 'scissor']
    return items[Math.floor(Math.random() * items.length)]
}

function processResults(human_item, computer_item) {
    let result;
    if (human_item === computer_item) {
        result = `Tie! You choose ${human_item} and I choose ${computer_item}`
    } 

    // scissor vs paper
    
    else if (human_item === "scissor" && computer_item === "paper") {
        result = "Good Job! Your scissor cut my paper!"
        human_score++
        document.getElementById("human-score").innerHTML = human_score
    } 
    else if (human_item === "paper" && computer_item === "scissor") {
        result = "Ha! My Scissor cut your Paper!"
        computer_score++
        document.getElementById("computer-score").innerHTML = computer_score
    } 

    // rock vs paper

    else if (human_item === "paper" && computer_item === "rock") {
        result = "Good Job! Your paper ate my rock!"
        human_score++
        document.getElementById("human-score").innerHTML = human_score
    } else if (human_item === "rock" && computer_item === "paper") {
        result = "Ha! My paper ate your rock!"
        computer_score++
        document.getElementById("computer-score").innerHTML = computer_score
    }

    // rock vs scissor

    else if (human_item === "rock" && computer_item === "scissor") {
        result = "Good Job! Your rock block my scissor!"
        human_score++
        document.getElementById("human-score").innerHTML = human_score
    } else if (human_item === "scissor" && computer_item === "rock") {
        result = "Ha! My rock block your scissor!"
        computer_score++
        document.getElementById("computer-score").innerHTML = computer_score
    } 

    return result
}

function gameOver() {
    if (human_score === 5) {
        document.getElementById("result").innerHTML = "I surrender. You human win!"
    } else {
        document.getElementById("result").innerHTML = "Hah you human, I WINNNNN!"
    }
    human_score = 0
    computer_score = 0

    document.getElementById("replay").style.visibility = "visible";
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissor').disabled = true;
}

function replay() {
    window.location.reload();
}