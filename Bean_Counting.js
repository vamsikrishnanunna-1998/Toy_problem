function countBs(String) {
  var count = 0;
  for (var str of String) {
    if (str == "B") {
      count++;
    }
  }
  return count;
}

console.log(countBs("Bnab"));
