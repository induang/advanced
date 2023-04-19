const combine = function(n, k) {
	const ans = [];
	function recusion(arr, start, level){
			if(level === 0){
					ans.push(arr.slice());
					return;
			}
			for(let i = start;i <= n;i++){
					arr.push(i);
					recusion(arr, start+1, level-1);
					arr.pop();
			}
	}
	for(let i = 1;i < n; i++){
			recusion([i], i+1, k-1);
	}
	return ans;
};

console.log("ans: ", combine(3,3));
