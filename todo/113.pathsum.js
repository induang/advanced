function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

const pathSum = function(root, targetSum) {
	if(!root) return [];
	const stack = [];
	const ans = [];
	const arr = [];
	while(root || stack.length){
			while(root){
					stack.push(root);
					arr.push(root.val);
					targetSum -= root.val;
					root = root.left;
			}
			root = stack.pop();
			root = root.right;
			if(root) continue;
			if(!root.left && !root.right && targetSum === 0){
					ans.push(arr.slice());
			}
				arr.pop();
				targetSum += root.val;
			}
			// console.log("NOW: ", root.val, "----", root.left?.val, root.right?.val, targetSum);
	return ans;
};

const root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13, new TreeNode(4, new TreeNode(5), new TreeNode(1)))));

console.log('ANS: ', pathSum(root, 22));