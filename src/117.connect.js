function Node(val, left, right, next) {
	this.val = val === undefined ? null : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
	this.next = next === undefined ? null : next;
};

const root  = new Node(
	1,
	new Node(
		2,
		new Node(4),
		new Node(5)), 
	new Node(
		3,
		null,
		new Node(7)))

const root2 = new Node(
	0,
	new Node(
		2, 
		new Node(1)
	),
	new Node(
		4,
		new Node(
			3,
			new Node(
				5,
				null,
				new Node(8)
			),
			new Node(
				1
			)
		),
		new Node(
			-1, 
			null,
			new Node(6)
		)
	)
);

const connect = function(root) {
	const stack = [];
	stack.push(root);
	while(stack.length){
		const len = stack.length;
		let pre = null;
		for(let i = 0;i < len;i++){
			const node = stack.shift();
			if(pre) pre.next = node;
			pre = node;
			if(node && node.left) stack.push(node.left);
			if(node && node.right) stack.push(node.right);
		}
	}
	return root;
};

console.log(connect(root));