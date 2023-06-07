function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

const buildTree = function(preorder, inorder) {
	function genTree(start, end){
		if(start > end) return null;
		const rootVal = preorder.shift();
		const root = new TreeNode(rootVal);
		if(start === end) return root;
		
		let rootIndex = start;
		while(inorder[rootIndex] === rootVal) rootIndex++;

		const nextNodeVal = preorder[preorder.length-1];
		let isNextLeft = false;
		for(let i = start; i < rootIndex; i++){
			if(inorder[i] === nextNodeVal){
				isNextLeft = true;
				break;
			}
		}

		if(isNextLeft){
			root.left = genTree(start, rootIndex-1);
			root.right = genTree(rootIndex+1, end);
		}else{
			root.right = genTree(rootIndex+1, end);
			root.left = genTree(start, rootIndex-1);
		}

	}

	return genTree(0, inorder.length-1);
};