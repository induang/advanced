function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const deleteDuplicates = function(head) {
	let previous = head;
	let list = previous;
	while(!list && list.val === list.next.val){
		previous = previous.next;
		list = previous.next;
	}
	while(!list){
		if(list.val === list.next.val){
			previous.next = list.next
		}else {
			previous = previous.next;
			list = previous.next;
		}
	}
	return head;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))));
const head2 = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))));
console.log(deleteDuplicates(head2))