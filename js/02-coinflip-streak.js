let coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log('heads');
    } else {
        console.log('tails');
    }
} while (coinFlip === 0);