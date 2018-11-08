// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let mapA = {};
	for(let a of stringA.toLowerCase()) {
		if(isLetter(a)) {
			if(mapA.hasOwnProperty(a)) {
				mapA[a] += 1;
			}else{
				mapA[a] = 1;
			}
		}
	}
	for(let b of stringB.toLowerCase()) {
		if(isLetter(b)) {
			if(mapA.hasOwnProperty(b)) {
				mapA[b] -= 1;
			}else{
				return false;
			}
		}
	}
	for(let key in mapA) {
		if(mapA[key] !== 0) {
			return false;
		}
	}
	return true;
}

function isLetter(c) {
	return /^[a-zA-Z]+$/.test(c);
}

module.exports = anagrams;
