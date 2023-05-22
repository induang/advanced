var swapPairs = function(head) {
	if(!head || !head.next) return head;
	let next = head.next;
	head.next = swapPairs(next.next);
	next.next = head;
	return next;
};