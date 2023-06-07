function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

// 层次遍历
function level(root){
	const stack = [];
	stack.push(root);
	while(stack.length){
		let len = stack.length;
		while(len--){
			const node = stack.shift();
			// visit and operate
			if(node.left) stack.push(node.left);
			if(node.right) stack.push(node.right);
		}
	}
}

// 后序 左右中
function postOrder(root){
	function dfs(root){
		if(root.left) dfs(root.left);
		if(root.right) dfs(root.right);
		// visit and operate root
	}
	dfs(root);
}
function postOrder2(root){
	const stack = [];
	const pre = null;
	stack.push(root);
	while(stack.length){
		const node = stack[stack.length-1];
		if(!node.left && !node.right || pre && (pre === node.left || pre === node.right)){
			// visit and operate node
			stack.pop();
			pre = node;
		}else{
			if(node.right) stack.push(node.right);
			if(node.left) stack.push(node.left);
		}
	}
}

// 先序 中左右
function preOrder(){
	function dfs(root){
		// visit and operate node
		if(root.left) dfs(root.left);
		if(root.right) dfs(root.right);
	}
	dfs(root);
}
function preOrder2(root){
	const stack = [];
	stack.push(root);
	while(stack.length){
		const node = stack.shift();
		// visit and operate node
		if(node.right) stack.push(node.right);
		if(node.left) stack.push(node.left);
	}
}

// 中序 左中右
function inOrder(root){
	function dfs(root){
		if(root.left) dfs(root.left);
		// visit and operate node
		if(root.right) dfs(root.right);
	}
	dfs(root);
}
function inOrder2(root){
	const stack = [];
	while(root || !stack.length()){
		while(root){
			stack.push(root);
			root = root.left;
		}
		if(stack.length){
			root = stack.pop();
			// visit and operate node;
			root = root.right;
		}
	}
}
