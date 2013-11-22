Board = {
  //passed in string
  checkString: function(string) {
    if (string.indexOf("0") === -1) {
      return false
    } else {
      return true
    }
  },

  //passed in string
  splitBoard: function(board){
    boardRows = board.match(/\d{9}/g)
    splittedBoard = []
    for(i=0; i<boardRows.length; i++){
      splittedBoard.push(boardRows[i].split(""))
    }
    return splittedBoard
  },

  //passed in index
  whichRow: function(cell) {
    return Math.floor(cell/9)
  },

  //passed in index
  whichColumn: function(cell){
    return (cell%9)
  },

  //passed in index
  whichBox: function(cell){
    var row = Board.whichRow(cell)
    var column = Board.whichColumn(cell)
    return (3*(Math.floor(row/3)))+(Math.floor(column/3))
  },

  //passed in split board & index
  getRow: function(board, cell) {
    var rowNumber = Board.whichRow(cell)
    return board[rowNumber]
  },

  //passed in split board & index
  getColumn: function(board, cell){
    var columnNumber = Board.whichColumn(cell)
    var column = []
    for(i=0; i<board.length; i++){
      column.push(board[i][columnNumber])
    }
    return column
  },

  //passed in split board & index
  getBox: function(board, cell){
    var boxNum = Board.whichBox(cell)
    var box = []
    for(i=0; i<board.length; i++){
      // console.log(board[i])
      for(j=0; j<board[i].length; j++){

        if(Board.whichBox(j) === boxNum){
          // console.log(Board.whichBox(j))
          box.push(board[i][j])
        }
      }
    }
    return box
  }
}

Solver = {
  //passed in array
  getFirstZero: function(row){
    return row.indexOf("0")
  },

  //passed in split board & index
  solveCell: function(board, cell) {
    var row = Board.getRow(board, cell)
    var column = Board.getColumn(board, cell)
    var box = Board.getBox(board, cell)
    var solvedRow = ['1','2','3','4','5','6','7','8','9']
    var diffedRow = solvedRow.diff(row).diff(column).diff(box)
    if(diffedRow.length === 1){
      return diffedRow[0]
    }else {
      return false
    }
  },

  //passed in split board
  solveBoard: function(board){
    for(i=0; i<board.length; i++){
      var emptyCell = Solver.getFirstZero(board[i])
      // console.log(emptyCell)
      // console.log(Solver.solveCell(board,emptyCell))
      board[i][emptyCell] = Solver.solveCell(board,emptyCell)
    }
    return board.join(",").replace(/,/g,"")
  }
}

Array.prototype.diff = function(array){
  return this.filter(function(i) {
    return !(array.indexOf(i) > -1)
  })
}