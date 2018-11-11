// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//bubbling the largest value toward the right
function bubbleSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		//inner interation comparing the values of adjacents
		for (var j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j+1]) {
				var lesser = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = lesser;
			}
		}
	}

	return arr;
}

function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		var indexOfMin = i;
		for (var j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}

		if(indexOfMin !== i) {
			var lesser = arr[indexOfMin];
			arr[indexOfMin] = arr[i];
			arr[i] = lesser;
		}
	}

	return arr;
}

//spliting array into 2 and keep splitting until size one
function mergeSort(arr) {
	if(arr.length === 1) {
		return arr;
	}

	var center = Math.floor(arr.length / 2);
	var left = arr.slice(0, center);
	var right = arr.slice(center);

	return merge(mergeSort(left), mergeSort(right));
}

//to merge 2 sorted arrays together into 1 single sorted array
function merge(left, right) {
	var results = [];

	//if both left and right still have elements, compare the first element of both array
	//and put the small one into the results
	while(left.length && right.length) {
		if(left[0] < right[0]) {
			results.push(left.shift());
		}else{
			results.push(right.shift());
		}
	}

	//put what is left into the results 
	//left or right should have no elements so order does not matter
	return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };
