function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

const zigzagLevelOrder = function(root) {
	if(!root) return [];
	const ans = [];
let tmp = [];
const queue = [];
let isLeftFirst = true;
queue.push(root);

while(queue.length){
	let size = queue.length;
	for(let i = 0;i < size; i++){
		const node = queue.shift();
		tmp.push(node.val);
		node.left && queue.push(node.left);
		node.right && queue.push(node.right);
	}
			if(isLeftFirst) ans.push(tmp.slice());
			else ans.push(tmp.slice().reverse());
	tmp = [];
	isLeftFirst = !isLeftFirst;
}

return ans;
};

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(zigzagLevelOrder(tree));