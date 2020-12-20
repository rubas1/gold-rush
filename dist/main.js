
let board
const startGame = function(){
    let rows = $("#rows").val()
    let cols = $("#cols").val()
    board = new gameBoard(rows, cols)
    renderBoard(board.arr, board.tot_coins)
}

$(document).keypress(function(e){
    if (e.which == 119) {
        board.movePlayer(1, "up")
        renderBoard(board.arr, board.tot_coins)
    }
    if (e.which == 97) {
        board.movePlayer(1, "left")
        renderBoard(board.arr, board.tot_coins)
    }
    if (e.which == 115) {
        board.movePlayer(1, "down")
        renderBoard(board.arr, board.tot_coins)
    }
    if (e.which == 100) {
        board.movePlayer(1, "right")
        renderBoard(board.arr, board.tot_coins)
    }
    if (e.which == 105) {
        board.movePlayer(2, "up")
        renderBoard(board.arr, board.tot_coins)
    }
    if (e.which == 106) {
        board.movePlayer(2, "left")
        renderBoard(board.arr, board.tot_coins)
    }
    if (e.which == 107) {
        board.movePlayer(2, "down")
        renderBoard(board.arr, board.tot_coins)
    }
    if (e.which == 108) {
        board.movePlayer(2, "right")
        renderBoard(board.arr, board.tot_coins)
    }
})

