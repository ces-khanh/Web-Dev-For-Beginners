const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',

];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
let startTime = Date.now();
// the starting time

// page elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("btn");
const span = document.getElementsByClassName("close")[0];
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
let time;

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('start').addEventListener('click', () => {

    startTime = Date.now();
    document.getElementById("typed-value").disabled = false;
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];


    words = quote.split(' ');

    wordIndex = 0;

    const spanWords = words.map(function (word) { return `<span>${word} </span>` });
    quoteElement.innerHTML = spanWords.join('')

    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';

    typedValueElement.value = '';
    typedValueElement.focus();





})

myStorage = window.localStorage;
let times = [];

typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    if ((typedValue == currentWord && wordIndex == words.length - 1)) {
        const elapsedTime = new Date().getTime() - startTime;
        times.push(elapsedTime);
        localStorage.setItem("time", times)
        console.log(`localStorage ${localStorage.getItem("time")}`);
        document.getElementById('topTime').innerHTML = Math.min(...times) / 1000

        console.log(times);

        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
        modal.style.display = "block";
        //Disable the textbox when the player completes the quote
        quoteElement.innerHTML = ' ';
        //Disable the input event listener on completion, and re-enable it when the button is clicked 
        document.getElementById("typed-value").disabled = true;
    } else if (typedValue.endsWith(' ') && typedValue.trim() == currentWord) {
        wordIndex++
        typedValueElement.value = '';
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        quoteElement.childNodes[wordIndex].className = 'highlight';

    } else if (currentWord.startsWith(typedValue)) {

        typedValueElement.className = '';
    } else {
        typedValueElement.className = 'error'
    }

})