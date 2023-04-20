function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

// 最后还是用了两个指针，那还不如用快慢指针

const removeNthFromEnd = function(head, n) {
	let length = 0;
	let rec = head;

	while(rec){
		length++;
		rec = rec.next;
	}
	rec = new ListNode(0);
	rec.next = head;
	length++;
	let ans = rec;
	while(n < length - 1){
		n++;
		rec = rec.next;
	}
	rec.next = rec?.next?.next;
	return ans.next;
};

let l1 = new ListNode(
	1, new ListNode(
		2, new ListNode(
			3, new ListNode(
				4, new ListNode(
					5
				)
			)
		)
	)
)

let l2 = new ListNode(1);

let l3 = new ListNode(1, new ListNode(2));

console.log(removeNthFromEnd(l3, 2));