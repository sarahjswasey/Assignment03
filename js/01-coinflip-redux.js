let coinFlip;
let amount = parseInt (prompt('How many time do you want to flip the coin? (respond with a whole number only)'));
for (let i = 1; i <= amount; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        console.log('heads');
    } else {
        console.log('tails');
    }
}