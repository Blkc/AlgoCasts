// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		var counter = 0;
		var node = this.head;

		while(node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if(!this.head) {
			return null;
		}

		var node = this.head;
		while(node) {
			if(!node.next) {
				return node;
			}

			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if(!this.head) {
			return;
		}

		var node = this.head;
		this.head = node.next;
	}

	removeLast() {
		if(!this.head) {
			return;
		}

		if(!this.head.next) {
			this.head = null;
			return;
		}

		var prev = this.head;
		var after = this.head.next;

		while(after) {
			if(!after.next) {
				prev.next = null;
				return;
			}

			prev = prev.next;
			after = after.next;
		}
	}

	insertLast(data) {
		var node = new Node(data);
		var tail = this.getLast();
		if(tail) {
			tail.next = node;
		}else{
			this.head = node;
		}
	}

	getAt(index) {
		var counter = 0;
		var node = this.head;
		while(node) {
			if(counter === index) {
				return node;
			}

			node = node.next;
			counter++;
		}

		return node;
	}

	removeAt(index) {
		if(index === 0) {
			this.removeFirst();
			return;
		}

		var prev = this.getAt(index - 1);
		if(!prev || !prev.next) {
			return;
		}

		prev.next = prev.next.next;
	}

	insertAt(data, index) {
		if(index === 0) {
			this.head = new Node(data, this.head);
		}

		var prev = this.getAt(index - 1);

		if(prev) {
			prev.next = new Node(data, prev.next);
		}else{
			var tail = this.getLast();
			if(tail) {
				tail.next = new Node(data);
			}else{
				this.head = new Node(data);
			}
		}
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while(node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator] () {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
