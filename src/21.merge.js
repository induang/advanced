function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

function patch(node){

}


const mergeTwoLists = function(list1, list2) {
	let head = new ListNode(-1000);
	const ans = head;
	while(list1 && list2){
		if(list1.val > list2.val){
			head.next = list2;
			head = head.next;
			list2 = list2.next;
		}else{
			head.next = list1;
			head = head.next;
			list1 = list1.next;
		}
	}
	while(!list1){
		head.next = list2;
		head = head.next;
		list2 = list2.next;
	}
	while(!list2){
		head.next = list1;
		head = head.next;
		list1 = list1.next;
	}
	return ans.next;
};

console.log(mergeTwoLists());