function repeatString(str, t) {
	let string = str;
	if (t < 0) {
		return 'ERROR';
	}
 	return string.repeat(t);
}

module.exports = repeatString
