function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

var generateTrees = function(n) {

	function genTree(start, end){
		if(start > end) return [null];
		const resTrees = [];
		for(let i = start; i <= end; i++){
			const leftTrees = genTree(start, i - 1);
			const rightTrees = genTree(i + 1, end);
			for(let subLeftTree of leftTrees){
				for(let subRightTree of rightTrees){
					const root = new TreeNode(i);
					root.left = subLeftTree;
					root.right = subRightTree;
					resTrees.push(root)
				}
			}
		}
		return resTrees;
	}

	return genTree(1,n);
};

console.log(generateTrees(3));