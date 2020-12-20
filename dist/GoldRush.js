class gameBoard extends Matrix{
    constructor(rows, cols){
        super(rows, cols)
        this.tot_coins = [0,0]
        this.initBoard()
    }

    generateBlocks(){
        let randomNum
        for(let r = 1; r < this.rows; r++){
            for(let c = 0; c < 2; c++){
                randomNum = Math.floor(Math.random() * this.cols - 2) + c
                this.arr[r][randomNum] = 'B'
            }
        }
    }

    initBoard(){
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.arr[r][c] = 'C'
            }
        }
        this.generateBlocks()
        this.arr[0][0] = 1
        this.arr[this.rows - 1][this.cols - 1] = 2
    }

    isLegalMove(coors, dir){
        let flag = true
        switch(dir){
            case "down":
                if((coors.x + 1) > this.rows-1 || this.arr[coors.x + 1][coors.y] === 'B'){
                    flag = false
                };
                break;
            case "up":
                if((coors.x - 1) < 0 || this.arr[coors.x - 1][coors.y] === 'B'){
                    flag = false
                };
                break;
            case "left":
                if((coors.y - 1) < 0 || this.arr[coors.x][coors.y - 1] === 'B'){
                    flag = false
                };
                break;
            case "right":
                if((coors.y + 1) > this.cols-1 || this.arr[coors.x][coors.y + 1] === 'B'){
                    flag = false
                };
        }
        return flag
    }

    move(newX, newY, oldX, oldY, player){
        this.arr[oldX][oldY] = '.'
            if(this.arr[newX][newY] === 'C'){
                this.tot_coins[player-1] += 10
            }
        this.arr[newX][newY] = player
    }
        
    movePlayer(player, direction){
        let currBox = this.findCoordinate(player)
        if(this.isLegalMove(currBox, direction)){
            if(direction === 'down'){
                this.move(currBox.x + 1, currBox.y, currBox.x, currBox.y, player)
            }
            if(direction === 'up'){
                this.move(currBox.x - 1, currBox.y, currBox.x, currBox.y, player)
            }
            if(direction === 'left'){
                this.move(currBox.x, currBox.y - 1, currBox.x, currBox.y, player)
            }
            if(direction === 'right'){
                this.move(currBox.x, currBox.y + 1, currBox.x, currBox.y, player)
            }
        }
    }
}