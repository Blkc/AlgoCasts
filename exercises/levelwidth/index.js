// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	var result = [1];
	var counter = 0;

	var node = root;
	var queue = [node, 's'];
	while(queue.length) {
		var node = queue.shift();

		if(node === 's' && queue.length) {
			result.push(counter);
			counter = 0;
			queue.push('s');
		}

		if(node.children) {
			for(var child of node.children) {
				queue.push(child);
				counter++;
			}
		}
	}

	return result;
}

module.exports = levelWidth;
