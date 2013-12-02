function initialize(){
  board = document.getElementById("sudoku_string").innerText.split("")
  // Solver.reRunSolver(board)
}

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
    return board.slice(rowNumber, rowNumber+9)
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
    Solver.counter = 0
    Solver.interval = setInterval(Solver.replaceWithDelay,100)
  },

  replaceWithDelay: function(){
    var index = Solver.counter
    if(index === board.length){
      // console.log("clear!")
      clearInterval(Solver.interval)
    }
    else{
      if (board[index] === '0'){
        board = board.replaceAt(index,Solver.solveCell(board,index))
        document.getElementById("sudoku_string").innerHTML = board
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
        console.log("shit")
        Solver.solveBoard(board)
      }
    },1000)
  }
}

// Dom = {
//   stringSpanner: function(board){
//     board = board.split('')
//     for(var i=0; i<board.length; i++){
//       // if board[i]
//       board[i] = '<span>' + board[i] + '</span>'
//     }
//     return board.join('')
//   },

//   replaceStringWithSpans: function(board){
//     document.getElementById("sudoku_string").innerHTML = Dom.stringSpanner(board)
//   }
// }


window.addEventListener("load",initialize)
