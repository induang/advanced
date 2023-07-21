function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

const isSymmetric = function(root) {
	const queue = [];
	queue.push(root);
	while(queue.length){
			let len = queue.length;
			for(let i = 0;i < len;i++){
					const node = queue.shift();
					// !node.left && !node.right && node.val != -200
					node.left && queue.push(node.left);
					node.right && queue.push(node.right);
			}
			len = queue.length;
			if(len % 2 !== 0){
				return false;
			}
			else {
					let cnt = 0;
					while(cnt < Math.floor(len/2) && queue[cnt].val === queue[len-1-cnt].val) cnt ++;
					if(cnt !== Math.floor(len/2)){
						return false;
					}
			}
	}
	return true;
};

const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));

console.log(isSymmetric(root));