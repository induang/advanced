function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const partition = function(head, x) {
	let small = new ListNode(0);
	const smallHead = small;
	let large = new ListNode(0);
	const largeHead = large;
	let curr = head;
	while(curr){
			if(curr.val < x){
				small.next = curr;
				small = small.next;
			}else{
					large.next = curr;
					large = large.next;
			}
			curr = curr.next;
	}
	large.next = null;
	small.next = largeHead.next;
	return smallHead.next;
};

const head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
const x = 3

console.log(partition(head, x));