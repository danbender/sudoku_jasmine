

Board = {
  whichRow: function(cell) {
    return Math.floor(cell/9)
  },

  whichColumn: function(cell){
    return (cell%9)
  },

  whichBox: function(cell){
    var row = Board.whichRow(cell)
    var column = Board.whichColumn(cell)
    return (3*(Math.floor(row/3)))+(Math.floor(column/3))
  },

  getRow: function(board, cell) {
    var rowNumber = Board.whichRow(cell) * 9
    return board.slice(rowNumber, rowNumber+9).split("")
  },

  getColumn: function(board, cell){
    var columnNumber = Board.whichColumn(cell)
    var column = []
    for(var i=columnNumber; i<board.length; i+=9){
      column.push(board[i])
    }
    return column
  },

  getBox: function(board, cell){
    var boxNum = Board.whichBox(cell)
    var box = []
    for(var i=0; i<board.length; i++){
      if(Board.whichBox(i) === boxNum){
        box.push(board[i])
      }
    }
    return box
  }
}

Solver = {
  getFirstZero: function(board){
    return board.indexOf("0")
  },

  solveCell: function(board, cell) {
    var row = Board.getRow(board, cell)
    var column = Board.getColumn(board, cell)
    var box = Board.getBox(board, cell)
    var solvedRow = ['1','2','3','4','5','6','7','8','9']
    var diffedArray = solvedRow.diff(row).diff(column).diff(box)
    if(diffedArray.length === 1){
      return diffedArray[0]
    }else {
      return '0'
    }
  },



  initialize: function(){
    Solver.board = document.getElementById("sudoku_string")
    Solver.boardVal = document.getElementById("sudoku_string").innerText
    Dom.replaceStringWithSpans(Solver.boardVal)
    Solver.reRunSolver(Solver.boardVal)
  },

  solveBoard: function(board){
    Solver.counter = 0
    Solver.interval = setInterval(Solver.replaceWithDelay,100)
  },

  replaceWithDelay: function(){
    var index = Solver.counter
    if(index === Solver.boardVal.length){
      clearInterval(Solver.interval)
    }
    else{
      if (Solver.boardVal[index] === '0'){
        Solver.board.children[index].innerHTML = Solver.solveCell(Solver.boardVal,index)
        Solver.boardVal = Solver.boardVal.replaceAt(index, Solver.solveCell(Solver.boardVal,index))

        if(Solver.boardVal[index] != '0'){
        Solver.board.children[index].className += " flip"
        }
      }
      Solver.counter++
    }
  },

  reRunSolver: function(board){
    Solver.bigInterval = setInterval(function(){
      if(Solver.getFirstZero(board) === -1){
        clearInterval(Solver.bigInterval)
      }
      else{
        Solver.solveBoard(board)
      }
    },1000)
  }
}

window.addEventListener("load",Solver.initialize)


Dom = {
  stringSpanner: function(board){
    board = board.split('')
    for(var i=0; i<board.length; i++){
      board[i] = '<div>' + board[i] + '</div>'
      if(board[i] == "<div>0</div>"){
        // ghetto solution FTW <3
        board[i] = "<div class='zero'>0</div>"
      }
    }
    return board.join('')
  },

  replaceStringWithSpans: function(board){
    board = Dom.stringSpanner(board)
    document.getElementById("sudoku_string").innerHTML = board
    return board
  }
}