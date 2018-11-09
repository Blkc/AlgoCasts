// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=1) {
	/* if(n <= 0) {
		return;
	}

	for(var row=1; row <= n; row++) {
		var str = '';
		var bound_diff = row - 1;
		var total_col = (n * 2) - 1; 

		for(var col=1; col <= total_col; col++) {
			if(row === n) {
				str += '#';
			}else{
				if(col >= Math.ceil(total_col/2) - bound_diff && col <= Math.ceil(total_col/2) + bound_diff) {
					str += '#';
				}else{
					str += ' ';
				}
			}
		}

		console.log(str);
	} */

	//recursion
	var str = '';
	var bound_diff = row - 1;
	var total_col = (n * 2) - 1; 

	for(var col=1; col <= total_col; col++) {
		if(row === n) {
			str += '#';
		}else{
			if(col >= Math.ceil(total_col/2) - bound_diff && col <= Math.ceil(total_col/2) + bound_diff) {
				str += '#';
			}else{
				str += ' ';
			}
		}
	}

	console.log(str);

	if(row < n)  {
		row++;
		pyramid(n, row);
	}
}

module.exports = pyramid;
