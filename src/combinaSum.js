const combinationSum = function(candidates, target) {
  const ans = [];
	candidates.sort((a,b) => a-b);
	console.log(candidates)

	function dfs(currSum, arr, currIndex){
		if(currSum === target) {
			ans.push(arr.slice())
			return ;
		}
		for(let i = currIndex; i < candidates.length;i++){
			if(currSum + candidates[i] > target){
				break;
			}else{
				arr.push(candidates[i]);
				dfs(currSum+candidates[i], arr, i);
				arr.pop()
			}
		}
	}

	dfs(0, [], 0)

	return ans;
};

console.log(combinationSum([3,12,9,11,6,7,8,5,4],15))