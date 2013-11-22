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
    return board.substring(rowNumber,rowNumber+9).split("")
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

  solveBoard: function(board){
    while(Solver.getFirstZero(board) !== -1){
      for(var i=0; i<board.length; i++){
        if(board[i] === '0'){
          console.log("index", i, "solved", Solver.solveCell(board,i))
          board = board.replaceAt(i,Solver.solveCell(board,i))
        }
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

String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length);
}