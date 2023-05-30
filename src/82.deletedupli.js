// 不知道在尾巴加哨兵节点开销大还是每次都判断大

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const deleteDuplicates = function(head) {
	const sentinel = new ListNode(); // 哨兵节点
	sentinel.next = head;
	let curr = sentinel;

	// 边缘情况处理, 没有节点和只有一个节点
	if(!curr) return null;
	if(!curr.next) return head; 

	while(curr.next.next){
		if(curr.next.val === curr.next.next.val){
			let reduce = curr.next;
			while(reduce.next && reduce.val === reduce.next.val){ // 要注意可能溢出
				reduce = reduce.next;
			}
			curr.next = reduce.next;
      if(!curr.next) break; // 防止溢出
		}else{
			curr = curr.next;
		}
	}
	return sentinel.next;
}

console.log(deleteDuplicates(head))