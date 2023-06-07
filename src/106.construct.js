function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

const buildTree = function(inorder, postorder) {
    function genTree(start, end){
			// 从 post 数组的尾巴中取到当前子树的根
			let rootVal = postorder.pop();
			const root = new TreeNode(rootVal);
			if(start >= end) return root;
			
			// 从 in 数组中找到当前子树的根的下标, 区分左右子树
			let rootIndex = start;
			while(inorder[rootIndex] !== rootVal) rootIndex++;

			// 查看 post 数组下一个根是左子树还是右子树的根, 构建顺序很重要
			let isNextLeft = false;
			const nextNodeVal = postorder[postorder.length-1];
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

			return root;
		}
		return genTree(0, inorder.length-1);
};