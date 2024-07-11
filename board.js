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
        var row = this.determineRow(column);
        if(this.currentPlayer == 0) {
            this.board[row][column] = 0;
            document.getElementById((row*7 + column).toString()).style.background = "red";
        } else {
            this.board[row][column] = 1;
            document.getElementById((row*7 + column).toString()).style.background = "yellow";
        }
        this.currentPlayer = (this.currentPlayer + 1) % 2;
    }

    hasGameFinished() {
        return false;

    }

    determineRow(column) {
        for (let i = 5; i >= 0; i--) {
            if(this.board[i][column] == -1) {
                return i;
            }
        }
        return -1;
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }


}