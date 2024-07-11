class Board {

    board;
    currentPlayer; 

    constructor() {
        // -1=empty, 0=red, 1=yellow
        this.board = [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1]
        ];
        this.currentPlayer = 0; // 0 = red, 1 = yellow
    }

    makemove(pos) {
        var column = pos%7;
        if(this.currentPlayer == 0) {
            document.getElementById((35 + column).toString()).style.background = "red";
        } else {
            document.getElementById((35 + column).toString()).style.background = "yellow";
        }
        this.currentPlayer = (this.currentPlayer + 1) % 2;
    }

    hasGameFinished() {
        return false;

    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }


}