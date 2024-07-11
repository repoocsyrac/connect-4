class Board {

    board;
    currentPlayer; 
    winner;

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
        this.winner = -1; // -1=game not over, 0=red, 1=yellow, 2=draw
        document.getElementById("gameStatus").textContent = "Current Player: RED";
        document.getElementById("main-border").style.borderColor = "red";
    }

    makemove(pos) {
        var column = pos%7;
        var row = this.determineRow(column);
        if(row == -1) {
            return;
        }
        if(this.currentPlayer == 0) {
            this.board[row][column] = 0;
            document.getElementById((row*7 + column).toString()).style.background = "red";
        } else {
            this.board[row][column] = 1;
            document.getElementById((row*7 + column).toString()).style.background = "yellow";
        }
        this.currentPlayer = (this.currentPlayer + 1) % 2;
        if(this.currentPlayer == 0) {
            document.getElementById("gameStatus").textContent = "Current Player: RED";
            document.getElementById("main-border").style.borderColor = "red";
        } else {
            document.getElementById("gameStatus").textContent = "Current Player: YELLOW";
            document.getElementById("main-border").style.borderColor = "yellow";
        }
        if(this.hasGameFinished()) {
            if(this.winner == 0) {
                document.getElementById("gameStatus").textContent = "------RED WINS------";
            } else if(this.winner == 1) {
                document.getElementById("gameStatus").textContent = "------YELLOW WINS------";
            } else {
                document.getElementById("gameStatus").textContent = "------DRAW------";
            }
            // TO-DO: show reset board button
        }
    }

    hasGameFinished() {
        // TODO: check red counters against bitmasks
        // TODO: check yellow counters against bitmasks
        // TODO: check if board is full
        if(!this.board.includes(-1)) {
            this.winner = 2;
            return true;
        }

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


}