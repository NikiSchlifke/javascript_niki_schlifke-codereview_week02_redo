// game.js



function diceRoll(faces) {
    return Math.round(1 + Math.random() * (faces - 1));
}

function threeDiceRoll(faces) {
    return [diceRoll(faces), diceRoll(faces), diceRoll(faces)];
}

function fillResults(results, container) {
    for (i = 0; i < container.length; i++) {
        container[i].innerHTML = results[i];
    }
}

function playerRoll(dice_doms) {
    var results = threeDiceRoll(6);
    fillResults(results, dice_doms);
   	return results[0] + results[1] + results[2];
}
