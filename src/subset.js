var subsets = function(nums) {
	const ans = [];
	const length = nums.length;
	ans.push([]);

	function recusion(arr, nextIndex){
		ans.push(arr.slice());
		if(nextIndex >= length) return;
		for(let i = nextIndex; i < length;i++){
			arr.push(nums[i])
			recusion(arr, i+1);
			arr.pop();
		}
	}

	for(let i = 0;i < length;i++){
		recusion([nums[i]], i+1)
	}
	return ans;
};

console.log(subsets([0]))