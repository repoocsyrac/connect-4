var board = new Board();

function makeMove(pos) {
    board.makemove(pos);
}

function resetGame() {
    board = new Board();
    for(let row = 0; row <= 5; row++) {
        for(let col = 0; col <= 6; col++) {
            document.getElementById((row*7 + col).toString()).style.background = "antiquewhite";
        }
    }
}