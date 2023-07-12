function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const reverseList = function(head){
	let ans;
	function dfs(node){
			if(!node.next){
					ans = node;
					return node;
			}
			dfs(node.next).next = node;
			node.next = null;
			return node;
	}
	dfs(head);
	return ans;
}

// 迭代法
var reverseList2 = function(head) {
	if(!head) return null;
	let pre = null; node = head;
	let saveNext = null;
	while(node){
			saveNext = node.next;
			node.next = pre;
			pre = node;
			node = saveNext;
	}
	return pre;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log(reverseList(head));