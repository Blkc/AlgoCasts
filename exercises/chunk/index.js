// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	var length = array.length;
	var arr = [];
	var final = [];
	for(var i = 0; i < length; i++) {
		if(arr.length === size) {
			final.push(arr);
			arr = [];
		}

		if(i === length - 1) {
			final.push(arr);
		}

		arr.push(array[i]);
	}

	return final;
}

module.exports = chunk;
