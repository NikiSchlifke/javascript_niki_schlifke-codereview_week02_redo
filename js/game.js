// game.js


/**
 * Roll a dice with a number of faces.
 * @param  {Number}
 * @return {Number}
 */
function diceRoll(faces) {
    return Math.round(1 + Math.random() * (faces - 1));
}

/**
 * Roll three dice with the same number of faces.
 * @param  {Number}
 * @return {Number}
 */
function threeDiceRoll(faces) {
    return [diceRoll(faces), diceRoll(faces), diceRoll(faces)];
}

/**
 * Fill the results of a dice roll into an array of dom objects innerHTML.
 * @param  {array}
 * @param  {array}
 */
function fillRoll(results, container) {
    for (i = 0; i < container.length; i++) {
        container[i].innerHTML = results[i];
    }
}

/**
 * Fill a given score into a dom object's innerHTML.
 * @param  {number}
 * @param  {symbol}
 */
function fillScore(score, container) {
    container.innerHTML = score;
}

/**
 * Using the reduce array method with a anonymous function to calculate an array's sum.
 * @param  {array}
 * @return {number}
 */
function sumArray(values) {
    return values.reduce(function(former, latter) {
        return former + latter;
    });
}

/**
 * Generate a roll and place it into the given dom.
 * Is called by the roll buttons.
 * @param  {array}
 * @return {number}
 */
function playerRoll(dice_doms) {
    var results = threeDiceRoll(6);
    fillRoll(results, dice_doms);
    // Leaving in the "easy" way to get the result for brevity.
    // return results[0] + results[1] + results[2];
    return sumArray(results);

}



function nextPlayer(button1, button2) {
    button1.disabled = true;
    if (hasBeenRolled) {
        button2.disabled = false;
    }
}

/**
 * Ask a players name and store it into the given dom object.
 * Return the players name for later use.
 * @param  {symbol}
 * @param  {number}
 * @return {string}
 */
function promptPlayer(name_dom, player_id) {
    var name = prompt("Please enter Player" + player_id + "'s Name: ");
    name_dom.textContent = name;
    return name;
}

/**
 * Generates a random number beteen 0 and 255
 * @return {Number}
 */
function random255() {
    return Math.floor(Math.random() * 255);
}

/**
 * Generates a random 8 bit hex string.
 * @return {string}
 */
function randomHex() {
    return (random255()).toString(16);
}

/**
 * Generates a random html color hex string
 * @return {string}
 */
function randomColor() {
    return '#' + randomHex() + randomHex() + randomHex();
}

/**
 * Use the DOMContentReloaded Event listener to initialize the game when the page is loaded.
 */
document.addEventListener("DOMContentLoaded", function() {
    var title = '';
    title += promptPlayer(document.getElementById('player1--name'), 1);
    title += ' vs ';
    title += promptPlayer(document.getElementById('player2--name'), 2);
    document.title = title;
    document.body.style.backgroundColor = randomColor();
    // Global variable for rolling state.
    hasBeenRolled = false;
});
