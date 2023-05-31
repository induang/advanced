var levelOrderBottom = function(root) {
	if(!root) return [];
	const ans = [];
	const stack = [];
	stack.push(root);
	while(stack.length){
			const len = stack.length;
			const tmp = [];
			for(let i = 0;i < len; i++){
					const node = stack.shift();
					tmp.push(node.val);
					if(node && node.left) stack.push(node.left);
					if(node && node.right) stack.push(node.right);
			}
			ans.unshift(tmp.slice());
	}
	return ans;
};