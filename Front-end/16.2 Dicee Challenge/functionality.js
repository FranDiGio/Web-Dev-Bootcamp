function getImage(number) {

    if (number === 0){
        var image = "images/dice1.png";
    }
    else if (number === 1){
        var image = "images/dice2.png";
    }
    else if (number === 2){
        var image = "images/dice3.png";
    }
    else if (number === 3){
        var image = "images/dice4.png";
    }
    else if (number === 4){
        var image = "images/dice5.png";
    }
    else if (number === 5){
        var image = "images/dice6.png";
    }
    return image;
}

var random1 = Math.floor(Math.random() * 6);
var random2 = Math.floor(Math.random() * 6);

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var title = document.querySelector("h1");

var image1Selected = getImage(random1);
var image2Selected = getImage(random2);
img1.setAttribute("src", image1Selected);
img2.setAttribute("src", image2Selected);

if (random1 > random2){
    title.innerHTML = "🚩 Player 1 Wins";
}
else if (random2 > random1){
    title.innerHTML = "Player 2 Wins 🚩";
}
else {
    title.innerHTML = "Draw";
}


