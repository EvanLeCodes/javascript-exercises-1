function sumAll(a,b) {
	return math.range(a,b, true).reduce((a,b) => a + b, 0);
}

module.exports = sumAll
