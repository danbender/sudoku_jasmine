beforeEach(function(){
  unsolvedBoard = "530678912672195348198342567"
  solvedBoard = "123456789123456789123456789"
  splittedededBoard = [['1','2','3','4','5','6','7','8','9'],
                       ['1','2','3','4','5','6','7','8','9'],
                       ['1','2','3','4','5','6','7','8','9']]
})

describe("checkString", function(){
  it("checks the string for 0s", function(){
    expect(checkString(unsolvedBoard)).toBeTruthy()
  })

  it("returns false if no 0s", function(){
    expect(checkString(solvedBoard)).toBeFalsy()
  })
})

describe("splitBoard", function() {
  it("splits the string in a 9x9 array", function() {
    expect(splitBoard(solvedBoard)).toEqual(splittedededBoard)
  })
})

describe("whichRow", function(){
  it("returns the row index of a particular cell", function(){
    expect(whichRow(11)).toEqual(1)
  })
})

describe("whichColumn", function() {
  it("returns the column of a particular cell", function() {
    expect(whichColumn(13)).toEqual(4)
  })
})

describe("whichBox", function(){
  it("returns the box that a particular cell is in", function(){
    expect(whichBox(13)).toEqual(1)
  })
})

describe("get current row", function(){
  it("returns the array associated with a particular row", function(){
    expect(getRow(splittedededBoard, 11)).toEqual(['1','2','3','4','5','6','7','8','9'])
  })
})

describe("get current column", function() {
  it("returns the column array associated with the current cell", function() {
    expect(getColumn(splittedededBoard, 9)).toEqual(['1','1','1'])
  })
})

describe("get current box", function(){
  it("returns the box associated with the current cell", function(){
    expect(getBox(splittedededBoard, 0)).toEqual(['1','2','3','1','2','3','1','2','3'])
  })
})

describe("find the first zero aka empty cell", function() {
  it("returns the index of the first empty cell", function() {
    expect(getFirstZero(unsolvedBoard)).toEqual(2)
  })
})

describe("solveCell", function(){
  var unsolvedSplitBoard = splitBoard("530678912672195348198342567")
  it("replaces empty cell with value that doesn't exist in it's row, column, or box", function(){
    expect(solveCell(unsolvedSplitBoard,2)).toEqual('4')
  })
})