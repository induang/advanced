function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

function getLength(head){
	let len = 0;
	let cur = head;
	while(cur){
		len++;
		cur = cur.next;
	}
	return len;
}



const sortedListToBST = function (head){
	function buildTree(left, right){
		if(left > right) return null;
	
		let middle = Math.floor((left + right + 1) / 2);
		let root = new TreeNode();
		root.left = buildTree(left, middle - 1);
		root.val = head.val;
		head = head.next;
		root.right = buildTree(middle + 1, right);
		return root;
	}
	let length = getLength(head);
	return buildTree(0, length - 1);
}

const head = new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9)))));
console.log(sortedListToBST(head));