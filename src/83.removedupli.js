function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}


	const deleteDuplicates = function(head) {
    if(!head) return head;
		const ans = head;
    while(head.next){
			console.log(head)
        if(head.val === head.next.val){
            head.next = head.next.next;
        }else{
            head = head.next;
        }
    }
		return ans;
};

const head = new ListNode(1, new ListNode(2, new ListNode(2)));

console.log(deleteDuplicates(head));