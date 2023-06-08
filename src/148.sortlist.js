function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))

 
// 先尝试没什么优化的做法
// 时间 5% 空间 9% 
const sortList = function(head) {
	const dummy = new ListNode(-1000000);
	let cur = head;
	while(cur){
		let node = new ListNode(cur.val);
		let insertPre = dummy;
		while(insertPre.next && node.val > insertPre.next.val) insertPre = insertPre.next;
		node.next = insertPre.next;
		insertPre.next = node;
		cur = cur.next;
	}
	return dummy.next;
};

console.log(sortList(head))