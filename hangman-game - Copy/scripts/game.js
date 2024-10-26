const words = ["guitar", "oxygen", "mountain", "painting", "astronomy"];

// variables

random_word = "";
guessedletter = [];
remainigTry = 6;


// initialize the game

function initialize() {
    random_word = words[Math.floor(Math.random() * words.length)];
     console.log(random_word)
    guessedletter = Array(random_word.length).fill("_");

    remainigTry = 6;

    update_display();

    resetHangmanImage();


}


function update_display() {
    const answerSection = document.getElementById("answer-section");
    answerSection.innerHTML = guessedletter.join(" ");

}


function handleletterClicked(letter) {
    letter=letter.toLowerCase();
    if (random_word.includes(letter)) {
        console.log(letter)
        for (let i = 0; i < random_word.length; i++) {
            if (random_word[i] === letter) guessedletter[i] = letter;

        }
    } else {

        remainigTry--;
        // console.log(remainigTry);
        updateHangmanImages();

    }
    update_display();
    checkGameStatus();

}


function checkGameStatus() {
    if (!guessedletter.includes("_")) {
        alert("You won");
        initialize();
    } else if (remainigTry === 0) {
        alert(`you lose  the random word is ${random_word}`);
        initialize();
    }
}


document.querySelectorAll(".letter").forEach(letter => {
    letter.addEventListener("click", (e) => {
        handleletterClicked(e.target.textContent);
    });
});


initialize();




