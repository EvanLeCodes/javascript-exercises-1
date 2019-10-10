const ftoc = function(temp) {
	return parseFloat(((temp - 32) * (5.0/9.0)).toFixed(1));
}

const ctof = function(temp) {
	return parseFloat(((temp * (9.0/5.0)) + 32).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
