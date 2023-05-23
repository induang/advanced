function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const rotateRight = function(head, k) {
	if(!head) return null;
	let length = 0;
	let tail = head;
	
    while(tail.next){
        length++;
        tail=tail.next;
    }
	length++;

	const remainer = k % length;
	let pre = head;
	while(length - 1 > remainer){
        pre = pre.next;
        length--;
	}

	tail.next = head;
	tail = pre.next;
	pre.next = null;
	return tail;
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log(rotateRight(head, 2))