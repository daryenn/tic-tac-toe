class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.fieldOfPlay = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.fieldOfPlay[rowIndex][columnIndex] == null){
            this.fieldOfPlay[rowIndex][columnIndex] = this.currentSymbol;
            if(this.currentSymbol == 'x'){
                this.currentSymbol = 'o';
            }else{
                this.currentSymbol = 'x';
            }
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()){
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        let positions = [this.fieldOfPlay[0][0], this.fieldOfPlay[0][1], this.fieldOfPlay[0][2],
        this.fieldOfPlay[1][0], this.fieldOfPlay[1][1], this.fieldOfPlay[1][2],
        this.fieldOfPlay[2][0], this.fieldOfPlay[2][1], this.fieldOfPlay[2][2],

        this.fieldOfPlay[0][0], this.fieldOfPlay[1][0], this.fieldOfPlay[2][0],
        this.fieldOfPlay[0][1], this.fieldOfPlay[1][1], this.fieldOfPlay[2][1],
        this.fieldOfPlay[0][2], this.fieldOfPlay[1][2], this.fieldOfPlay[2][2],

        this.fieldOfPlay[0][0], this.fieldOfPlay[1][1], this.fieldOfPlay[2][2],
        this.fieldOfPlay[2][0], this.fieldOfPlay[1][1], this.fieldOfPlay[0][2]]

        for (let i=0; i<positions.length; i=i+3){
            if (positions[i] == positions[i+1] && positions[i] == positions[i+2]){
                return positions[i];
            }
        }
        return null;
    }

    noMoreTurns() {
        if (this.fieldOfPlay[0][0] != null && this.fieldOfPlay[0][1] != null && this.fieldOfPlay[0][2] != null &&
            this.fieldOfPlay[1][0] != null && this.fieldOfPlay[1][1] != null && this.fieldOfPlay[1][2] != null &&
            this.fieldOfPlay[2][0] != null && this.fieldOfPlay[2][1] != null && this.fieldOfPlay[2][2] != null){
                return true;
            } else{
                return false;
            }
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()){
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.fieldOfPlay[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
