var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        var buttonPressed = this.innerHTML;
        makeSound(buttonPressed);
        animatePressed(buttonPressed);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animatePressed(event.key);
});

function makeSound(key) {

    switch (key) {

        case "w":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        
        case "a":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "s":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "d":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "j":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        default:
            console.log('Not available drum');
            break;
        
    }
}

function animatePressed(key) {

    var keyPressed = document.querySelector("." + key);
    keyPressed.classList.add("pressed");

    setTimeout(function(){
        keyPressed.classList.remove("pressed");
    }, 100);
}