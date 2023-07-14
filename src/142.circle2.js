const detectCycle = function(head) {
	let fast = head;
	let slow = head;
	let cnt = 0;
	while(fast !== slow){
			fast = fast.next;
			if(fast) fast = fast.next;
			slow = slow.next;
			cnt++;
	}
	if(!fast) return fast;
	else return cnt; 
};

console.log(detectCycle)