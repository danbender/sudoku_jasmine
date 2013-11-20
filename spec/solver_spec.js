beforeEach(function(){
  unsolvedBoard = "1234507891234560789"
  solvedBoard = "123456789123456789"
  splittedBoard = [['1','2','3','4','5','6','7','8','9'],['1','2','3','4','5','6','7','8','9']]
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
    expect(splitBoard(solvedBoard)).toEqual(splittedBoard)
  })
})



