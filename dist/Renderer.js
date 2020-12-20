const renderBoard = function(board, scores){
    $(".game-board").empty()
    const source = $("#board-template").html()
    const template = Handlebars.compile(source) 
    const newHtml = template({board})
    const source1 = $("#score-template").html()
    const template1 = Handlebars.compile(source1) 
    const newHtml1 = template1({score1: scores[0], score2:scores[1]})
    $(".game-board").append(newHtml)
    $(".game-board").append(newHtml1)
}
