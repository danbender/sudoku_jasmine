function checkString (string) {
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
