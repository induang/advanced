function ListNode(val) {
	this.val = val;
	this.next = null;
}

const hasCycle = function(head) {
	if(!head) return false;
	while(head.next){
			head.val = 10000001;
			if(head.next.val === 10000001) return true;
			head = head.next;
	}
	return false;
};

const head = new ListNode(1, new ListNode(2));
console.log(hasCycle(head));
