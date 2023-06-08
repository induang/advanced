// 时间 5% 空间 20%

const insertionSortList = function(head) {
	const dummy = new ListNode(-100000);
	dummy.next = head;
	let flag = head;
	let pre = dummy;
	while(flag){
		let curNode = flag;
		flag = flag.next;
		pre.next = flag;
        curNode.next = null;
		let insertPre = dummy;
		while(insertPre.next && curNode.val > insertPre.next.val) insertPre = insertPre.next;
		curNode.next = insertPre.next;
		insertPre.next = curNode;
		if(flag && pre.next !== flag) pre = pre.next;
	}
	return dummy.next;
};

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))

console.log(insertionSortList(head));