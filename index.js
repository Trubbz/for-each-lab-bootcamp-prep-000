var iterativeLog = array => {
  array.forEach(callback)
}

var callback = (element, index, array) => {
  console.log(`${index}: ${element}`);
}

var iterate = (callback) => {
  var myArray = ["Tom", "William", "Dickman"];
  myArray.forEach(callback);
  return myArray;
}

var doToArray = (array, callback) => {
  array.forEach(callback);
}
