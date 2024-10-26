// array of file path for eavh image

const hangmanParts = ["./assets/head.svg", "./assets/body.svg", "./assets/left-hand.svg", "./assets/right-hand.svg", "./assets/left-leg.svg", "./assets/right-leg.svg"];

const hangmanClasses = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"];

let errors = 0;

function updateHangmanImages() {
    if (errors < hangmanParts.length) {
        const hangElement = document.getElementById("hang");
        const imageElement = document.createElement("img");
        imageElement.src = hangmanParts[errors];
        imageElement.classList.add(hangmanClasses[errors]);
        hangElement.appendChild(imageElement);
        errors++;

    }


}

// function to rest the hang image

function resetHangmanImage(){
    errors=0;
    document.getElementById("hang").innerHTML='<img src="./assets/hang.svg" alt="">'
    
}

