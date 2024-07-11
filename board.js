class Board {

    board;
    currentPlayer; 
    winner;
    bitmasks;

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
        this.loadBitMasks();
        console.log(this.bitmasks);
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
        var currentRed = this.getBinaryString("0");
        for(let i=0; i<this.bitmasks.length; i++) {
            let count=0;
            for(let j=0; j<currentRed.length; i++) {
                if(currentRed[j] == this.bitmasks[i].charAt(j)) {
                    count++;
                }
            }
            if(count == 4) {
                this.winner=0;
                return true;
            }
        }
        
        // TODO: check yellow counters against bitmasks
        /*var currentYellow = this.getBinaryString("1");
        for(var i=0; i<this.bitmasks.length; i++) {
            // TO-DO: write regex for matching 4 1's
            if((currentYellow & this.bitmasks[i]).test("[0,1]*(1[0,1]*){4}[0,1]*")) {
                this.winner = 1;
                return true;
            }
        }*/

        // Checks if board is full
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

    loadBitMasks() {
        var temp = "111100000000000000000000000000000000000000,011110000000000000000000000000000000000000,001111000000000000000000000000000000000000,000111100000000000000000000000000000000000,000000011110000000000000000000000000000000,000000001111000000000000000000000000000000,000000000111100000000000000000000000000000,000000000011110000000000000000000000000000,000000000000001111000000000000000000000000,000000000000000111100000000000000000000000,000000000000000011110000000000000000000000,000000000000000001111000000000000000000000,000000000000000000000111100000000000000000,000000000000000000000011110000000000000000,000000000000000000000001111000000000000000,000000000000000000000000111100000000000000,000000000000000000000000000011110000000000,000000000000000000000000000001111000000000,000000000000000000000000000000111100000000,000000000000000000000000000000011110000000,000000000000000000000000000000000001111000,000000000000000000000000000000000000111100,000000000000000000000000000000000000011110,000000000000000000000000000000000000001111,100000010000001000000100000000000000000000,010000001000000100000010000000000000000000,001000000100000010000001000000000000000000,000100000010000001000000100000000000000000,000010000001000000100000010000000000000000,000001000000100000010000001000000000000000,000000100000010000001000000100000000000000,000000010000001000000100000010000000000000,000000001000000100000010000001000000000000,000000000100000010000001000000100000000000,000000000010000001000000100000010000000000,000000000001000000100000010000001000000000,000000000000100000010000001000000100000000,000000000000010000001000000100000010000000,000000000000001000000100000010000001000000,000000000000000100000010000001000000100000,000000000000000010000001000000100000010000,000000000000000001000000100000010000001000,000000000000000000100000010000001000000100,000000000000000000010000001000000100000010,000000000000000000001000000100000010000001";
        /*this.bitmasks = [];
        fetch('positions.csv')
        .then(response => response.text())
        .then(text => temp)*/
        this.bitmasks = temp.split(",");
    }

    getBinaryString(player) {
        var str = "";
        var currentBoard = this.board.toString().split(",");
        for(let i=0; i<= currentBoard.length; i++) {
            if(currentBoard[i] === player) {
                str += "1";
            } else {
                str += "0";
            }
        }
        return str;
    }


}