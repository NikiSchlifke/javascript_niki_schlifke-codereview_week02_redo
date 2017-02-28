// game.js



function diceRoll(faces) {
    return Math.round(1 + Math.random() * (faces - 1));
}

function threeDiceRoll(faces) {
    return [diceRoll(faces), diceRoll(faces), diceRoll(faces)];
}

function fillRoll(results, container) {
    for (i = 0; i < container.length; i++) {
        container[i].innerHTML = results[i];
    }
}

function fillScore(score, container) {
    container.innerHTML = score;
}

function playerRoll(dice_doms) {
    var results = threeDiceRoll(6);
    fillRoll(results, dice_doms);
    return results[0] + results[1] + results[2];
}

function promptPlayer(name_dom, player_id) {
    name_dom.textContent = prompt("Please enter Player" + player_id + "'s Name: ");
}

document.addEventListener("DOMContentLoaded", function() {
    promptPlayer(document.getElementById('player1--name'), 1);
    promptPlayer(document.getElementById('player2--name'), 2);
});

