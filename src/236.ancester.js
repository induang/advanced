function TreeNode(val, left, right) {
	this.val = val;
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

const lowestCommonAncestor = function(root, p, q) {
	const map = new Map();
	let ans;
	function dfs(node, target){
			if(node.val === target.val){
				if(map.has(node.val) && ans === undefined) ans = map.get(node.val);
				map.set(node.val, node);
				return true;
			}
			if(node.left){
				if(dfs(node.left, target)){
					if(map.has(node.val) && ans === undefined) ans = map.get(node.val);
					map.set(node.val, node);
					return true;
				}
			}
			if(node.right){
				if(dfs(node.right, target)){
					if(map.has(node.val) && ans === undefined) ans = map.get(node.val);
					map.set(node.val, node);
					return true;
				}
			}
	}
	dfs(root, p);
	dfs(root, q);
	// for(let value of map.keys()) console.log(value);
	return ans;
};

const q = new TreeNode(4);
const p = new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), q));

const root = new TreeNode(3, p, new TreeNode(1, new TreeNode(0), new TreeNode(8)));

console.log(lowestCommonAncestor(root, p, q))