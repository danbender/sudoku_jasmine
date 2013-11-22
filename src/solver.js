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
    for(var i=0; i<boardRows.length; i++){
      splittedBoard.push(boardRows[i].split(""))
    }
    return splittedBoard
  },

  //passed in index from 1 to 81
  whichRow: function(cell) {
    return Math.floor(cell/9)
  },

  //passed in index from 1 to 81
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
    var rowNumber = Board.whichRow(cell) * 9
    return board.substring(rowNumber,rowNumber+9).split("")
  },

  //passed in split board & index
  getColumn: function(board, cell){
    var columnNumber = Board.whichColumn(cell)
    var column = []
    for(var i=columnNumber; i<board.length; i+=9){
      column.push(board[i])
    }
    return column
  },

  //passed in string board & index
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
  //passed in array
  getFirstZero: function(board){
    return board.indexOf("0")
  },

  //passed in string board & index
  solveCell: function(board, cell) {
    var row = Board.getRow(board, cell)
    var column = Board.getColumn(board, cell)
    var box = Board.getBox(board, cell)
    var solvedRow = ['1','2','3','4','5','6','7','8','9']

    var diffedArray = solvedRow.diff(row).diff(column).diff(box)
    // console.log(diffedArray)
    if(diffedArray.length === 1){
      return diffedArray[0]
    }else {
      return '0'
    }
  },

  // passed in string board
  solveBoard: function(board){
    for(var i=0; i<board.length; i++){
      if(board[i] === '0'){
        console.log(Board.getColumn(board, i))
        board = board.replace(board[i],Solver.solveCell(board,i))
      }
    }
    return board
  }
}

Array.prototype.diff = function(array){
  return this.filter(function(i) {
    if(array){
      return !(array.indexOf(i) > -1)
    }
  })
}
