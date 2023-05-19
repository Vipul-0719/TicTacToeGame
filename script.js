let audioTing = new Audio("music/ting.mp3");
let turn = "X";
// let player1 = document.querySelector('player1');
// let player2 = document.querySelector('player2');
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// function savePlayerName()
// {
// 	var username1 = $('#Player1').val().trim();
// 	var username2 = $('#Player2').val();
// 	// check your name, if it is empty then it display alert message
//     alert(username1);
//     exit();
// 	if (!username1)
// 	{
// 		alert("Please enter your name");
// 		return;
// 	}
// 	//save a name value
// 	sessionStorage.setItem("Player1name", username1);
// 	sessionStorage.setItem("Player2name", username2);
// 	// Initialize score of the game
// 	sessionStorage.Player1Score = 0;
// 	sessionStorage.Player2Score = 0;
// 	window.location.href="#play-game-page";
// }


// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
        }
    });
}

// Game Logic
// all box value are store in this variable
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        // Check inner value of box 
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTing.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isGameOver = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px"
});

// Chnage theme of game 
const changeColor = document.getElementById('theme'),
    bgcolors = ['skyblue', 'pink', 'yellow'],
    colors = ['red', 'darkgreen', 'darkblue'];
let colorIndex = 0;

changeColor.addEventListener('click', () => {
    document.body.style.backgroundColor = bgcolors[colorIndex];
    document.body.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % bgcolors.length;
    colorIndex = (colorIndex + 1) % colors.length;
});

// Increase font size 
$(document).ready(function () {
    $('.increaseFont').click(function () {
        $(".content").css("fontSize", "35px");
    });
});

// Decrease Font size 
$(document).ready(function () {
    $('.decreaseFont').click(function () {
        $(".content").css("fontSize", "20px");
    });
});
