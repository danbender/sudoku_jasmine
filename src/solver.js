function checkString(string) {
  if (string.indexOf("0") === -1) {
    return false
  } else {
    return true
  }
}

function splitBoard(board){
  boardRows = board.match(/\d{9}/g)
  splitBoard = []
  for(i=0; i<boardRows.length; i++){
    splitBoard.push(boardRows[i].split(""))
  }
  return splitBoard
  console.log(splitBoard)
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

