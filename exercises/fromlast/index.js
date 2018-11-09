// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
	var first = list.head;
	var second = list.head;

	if(n === 0) {
		while(first.next) {
			first = first.next;
		}
	}else{
		while(second) {
			second = secondNext(second, n);
			if(second) {
				first = first.next;
			}
		}
	}

	return first;
}

function secondNext(second, n) {
	for(var i = 0; i < n; i++) {
		second = second.next;

		if(!second) {
			return null;
		}
	}

	return second;
}

module.exports = fromLast;
