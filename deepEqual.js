var deepEqual = function (x, y) {
  if (x === y) {
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else
    return false;
}

// var obj = {foo:1};
// console.log(deepEqual ({foo:1}, obj));

var obj1 = 2;
var obj2 = 2;
var institute1 = {college: "IIIT", study:"MSIT"};
var institute2 = {college: "IIIT", study: null};
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(institute1,institute2));
