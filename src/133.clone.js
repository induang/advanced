const cloneGraph = function(node) {
	if(!node) return null;
	const store = new Map();
	function dfs(node){
			let subNode = null;
			if(store.has(node.val)){
					subNode = store.get(node.val);
					return subNode;
			}else{
					subNode = new Node(node.val);
					store.set(subNode.val, subNode);
			}
			for(let neib of node.neighbors){
					subNode.neighbors.push(dfs(neib));
			}
			return subNode;
	}
	return dfs(node);
};