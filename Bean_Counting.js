function countBs(String) {
  var count = 0;
  for (var str of String) {
    if (str == "B") {
      count++;
    }
  }
  return count;
}

function countChar(String,char) {
  var count = 0;
  for (var str of String) {
    if (str == char.toUpperCase()) {
      count++;
    }
  }
  return count;
}

console.log(countBs("Bnab"));
console.log(countChar("baNaNn","N"));
