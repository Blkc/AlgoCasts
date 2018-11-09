// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	for(var i = 1; i <= n; i++) {
		var str = '';
		for(var j = 1; j <= i; j++) {
			str += '#';
		}
		for(var h = 1; h <= n - i; h++) {
			str += ' ';
		}
		console.log(str);
	}
}

module.exports = steps;
