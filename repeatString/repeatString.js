function repeatString(str, t) {
  result = '';
  for (let i = 0; i >= t; i++) {
  	result += " " + str;
  }
  return result;

}

module.exports = repeatString
