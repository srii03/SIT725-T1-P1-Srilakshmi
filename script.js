function changeText() {
    let potentialText = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let randomNumber = getRandomNumber(0, potentialText.length - 1);
    let textToChangeTo = potentialText[randomNumber];
    document.getElementById('heading').innerHTML = textToChangeTo;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
