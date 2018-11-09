// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	//Solution 1
	/* var reversed = '';
	for(let chracter of str) {
		reversed = chracter + reversed;
	}
	return reversed; */

	//Solution 2
	/* const arr = str.split('');
	arr.reverse();
	return arr.join(''); */

	//Solution 3
	//return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
