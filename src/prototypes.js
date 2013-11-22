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