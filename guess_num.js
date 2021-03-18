let maximum = parseInt(prompt('Enter a maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('Come on be serious'));
}
const targetNum = Math.floor(Math.random * maximum) + 1;

let guess = parseInt(prompt('Enter your first guess'));
let attempts = 1;

while (parseInt(guess) !== targetNum); {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high, come down')
    } else { 
        guess = prompt('Too low, go back up')
    }

}

if (guess === 'q') {
    document.write("You BIG BABY!!")
} else {
    document.write("CONGRATS YOU WIN! ")
    document.write(`Well Done, it took ${attempts} guesses `)
}