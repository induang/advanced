const subsetsWithDup = function(nums) {
	const ans = [];
	nums.sort();
	function dfs(arr, start){
		ans.push(arr.slice());
		if(arr.length >= nums.length) return ;
		for(let i = start;i < nums.length;i++){
			if(i > start && nums[i] === nums[i-1]) continue;
			arr.push(nums[i]);
			dfs(arr, i+1);
			arr.pop();
		}
	}
	dfs([], 0)
	return ans;
};

const nums = [1,2,2];

console.log('ans: ', subsetsWithDup(nums))