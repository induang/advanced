const combinationSum2 = function(candidates, target) {
	const newCadidates = candidates.slice();
	newCadidates.sort((a,b) => a - b);
	const ans = [];
	function dfs(arr, sum, start){
			if(sum === target){
					ans.push(arr.slice());
					return ;
			}
			if(sum > target) return ;
			for(let i = start; i < newCadidates.length;i++){
				// 防止了同一层级中两个相同的节点被重复压入
				if(i > start && newCadidates[i] === newCadidates[i-1]) continue;
				arr.push(newCadidates[i]);
				sum += newCadidates[i];
				dfs(arr, sum, i+1);
				arr.pop();
				sum -= newCadidates[i];
			}
	}
	dfs([],0,0);
	return ans;
};

const candidates = [10,1,2,7,6,1,5];
const target = 8;

console.log(combinationSum2(candidates, target));