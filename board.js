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

    
}