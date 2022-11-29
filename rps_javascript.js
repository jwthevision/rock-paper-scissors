console.log('Hello World!');

function getComputerChoice() {
    let rps = ['rock', 'paper', 'scissors'];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
}