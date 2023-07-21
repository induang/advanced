const isBalanced = function(root){
	let flag = true;
	function dfs(root){
		if(!root) return 0;
		let left = dfs(root.left);
		let right = dfs(root.right);
        if(left - right > 1 || left-right < -1){
            flag = false;
        }
		return Math.max(left, right) + 1;
	}
	dfs(root);
    return flag;
}

console.log(isBalanced());