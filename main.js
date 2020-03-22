let ball;
let interval;
let pointing = 0;

function startGame() {
    ball = document.querySelector('.ball');

    ball.addEventListener('click', ballClicked);
    document.addEventListener('contextmenu', showScore);
    
    interval = setInterval(moveBall, 1500);
    
    alert('The game is over when you score 10 points\n To see the points click with the right button');
}

function moveBall() {
    ball.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    ball.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
}

function ballClicked() {
    pointing += 1;
    if (pointing >= 10) {
        alert('You Win!');
        clearInterval(interval);
        ball.disabled = true;
    } else {
        moveBall(); 
    }
}

function showScore(ev) {
    ev.preventDefault();
    alert('Score: ' + pointing);   
}


window.onload = startGame;