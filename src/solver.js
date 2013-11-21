function checkString(string) {
  if (string.indexOf("0") === -1) {
    return false
  } else {
    return true
  }
}

function splitBoard(board){
  boardRows = board.match(/\d{9}/g)
  splittedBoard = []
  for(i=0; i<boardRows.length; i++){
    splittedBoard.push(boardRows[i].split(""))
  }
  return splittedBoard
}

function whichRow(cell) {
  return Math.floor(cell/9)
}

function whichColumn(cell){
  return (cell%9)
}

function whichBox(cell){
  var row = whichRow(cell)
  var column = whichColumn(cell)
  return 3*(Math.floor(row/3))+(Math.floor(column/3))
}

function getRow(board, cell) {
  var rowNumber = whichRow(cell)
  return board[rowNumber]
}

function getColumn(board, cell){
  var columnNumber = whichColumn(cell)
  var column = []
  for(i=0; i<board.length; i++){
    column.push(board[i][columnNumber])
  }
  return column
}

function getBox(board, cell){
  var boxNum = whichBox(cell)
  var box = []
  for(i=0; i<board.length; i++){
    for(j=0; j<board[i].length; j++){
      if(whichBox(j) === boxNum){
        box.push(board[i][j])
      }
    }
  }
  return box
}

function getFirstZero(board){
  return board.indexOf("0")
}

Array.prototype.diff = function(array){
  return this.filter(function(i) {
    return !(array.indexOf(i) > -1)
  })
}

function solveCell(board, cell) {
  var row = getRow(board, cell)
  var column = getColumn(board, cell)
  var box = getBox(board, cell)
  var solvedRow = ['1','2','3','4','5','6','7','8','9']
  var diffedRow = solvedRow.diff(row)
  diffedRow = diffedRow.diff(column)
  diffedRow = diffedRow.diff(box)
  if(diffedRow.length > 0){
    return diffedRow[0]
  }else {
    return false
  }
}

function solveBoard(board){
  var emptyCell = getFirstZero(board)
  solveCell(emptyCell)
}