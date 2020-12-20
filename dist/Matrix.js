class Matrix{
    constructor(rows, cols){
        this.rows = rows
        this.cols = cols
        this.arr = this.generateMatrix(rows, cols)
    }
  
    generateMatrix(numRows, numColumns) {
        let matrix = []
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(".")
            }
        }
        return matrix
    }
  
    print() {
      console.log(this.arr)
    }
    
    get(x, y) {
      return this.arr[x][y]
    }
    
    alter(row, col, num) {
      this.arr[row][col] = num
    }
  
    printColumn(x) {
      this.arr.forEach(r => console.log(r[x]))
    }
    
    
    printRow(y) {
      for (let i = 0; i < this.arr[y].length; i++) {
        console.log(this.arr[y][i])
        }
    }

    findCoordinate(num){
        let tmp = 0
        let res
        this.arr.forEach(r => {
            for(let i =0; i < r.length; i++){
                if(this.arr[tmp][i] === num){
                    res = {
                    x: tmp,
                    y: i
                }
                break
            }
        }
             tmp++
         })
         return res
        }
    }