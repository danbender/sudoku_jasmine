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

function getRow(cell) {
  return Math.floor(cell/9)
}

function getColumn(cell){
  return (cell%9)
}

function getBox(cell){
  var row = getRow(cell)
  var column = getColumn(cell)
  return 3*(Math.floor(row/3))+(Math.floor(column/3))
}

