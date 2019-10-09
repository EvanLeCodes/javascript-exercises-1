function removeFromArray(array, index) {
	
	return array.splice( array.indexOf(index),1);

}

module.exports = removeFromArray
