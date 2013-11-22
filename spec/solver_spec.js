beforeEach(function(){
  unsolvedBoard = "530678912672195348198342567"
  solvedBoard = "123456739123456789123456769123456749"
  splittedededBoard = [['1','2','3','4','5','6','7','3','9'],
                       ['1','2','3','4','5','6','7','8','9'],
                       ['1','2','3','4','5','6','7','6','9'],
                       ['1','2','3','4','5','6','7','4','9']]
})

describe("checkString", function(){
  it("checks the string for 0s", function(){
    expect(Board.checkString(unsolvedBoard)).toBeTruthy()
  })

  it("returns false if no 0s", function(){
    expect(Board.checkString(solvedBoard)).toBeFalsy()
  })
})

describe("splitBoard", function() {
  it("splits the string in a 9x9 array", function() {
    expect(Board.splitBoard(solvedBoard)).toEqual(splittedededBoard)
  })
})

describe("whichRow", function(){
  it("returns the row index of a particular cell", function(){
    expect(Board.whichRow(11)).toEqual(1)
  })
})

describe("whichColumn", function() {
  it("returns the column of a particular cell", function() {
    expect(Board.whichColumn(13)).toEqual(4)
  })
})

describe("whichBox", function(){
  it("returns the box that a particular cell is in", function(){
    expect(Board.whichBox(13)).toEqual(1)
  })
})

describe("getRow", function(){
  it("returns the array associated with a particular row", function(){
    expect(Board.getRow(solvedBoard, 11)).toEqual(['1','2','3','4','5','6','7','8','9'])
  })
})

describe("getColumn", function() {
  it("returns the column array associated with the current cell", function() {
    expect(Board.getColumn(solvedBoard, 9)).toEqual(['1','1','1','1'])
  })
})

describe("getBox", function(){
  it("returns the box associated with the current cell", function(){
    expect(Board.getBox(solvedBoard, 2)).toEqual(['1','2','3','1','2','3','1','2','3'])
  })
})

describe("find the first zero aka empty cell", function() {
  it("returns the index of the first empty cell", function() {
    expect(Solver.getFirstZero(unsolvedBoard)).toEqual(2)
  })
})

describe("solveCell", function(){
  it("replaces empty cell with value that doesn't exist in it's row, column, or box", function(){
    expect(Solver.solveCell(unsolvedBoard,2)).toEqual('4')
  })
})

describe("solveBoard", function() {
  var superUnsolvedSplitBoard = ("619030040270061008000047621486302079000014580031009060005720806320106057160400030")

  it("solves the Sudoku board until no zeroes are left", function() {
    expect(Solver.solveBoard(superUnsolvedSplitBoard)).toEqual("619238745274561398853947621486352179792614583531879264945723816328196457167485932")
  })
})