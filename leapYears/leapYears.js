function leapYears(year) {
	if ( year%4 === 0 && year%100 !== 0)
		return true;
	else if (year%400 === 0)
		return true;
	else return false;


	//return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
	// better code ^
}

module.exports = leapYears

