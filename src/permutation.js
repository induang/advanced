const permute = function(nums) {
	const ans = [];
	const rec = new Array(nums.length).fill(0);
	function recrusion(arr, level){
		if(level === 1){
			ans.push(arr.slice());
			return ;
		}
		for(let i = 0;i < nums.length;i++){
			if(rec[i]) continue;
			arr.push(nums[i]);
			rec[i] = 1;
			recrusion(arr, level-1);
			arr.pop();
			rec[i] = 0;
		}
	}

	for(let i = 0;i < nums.length;i++){
		rec.fill(0);
		rec[i] = 1;
		recrusion([nums[i]], nums.length);
	}

	return ans;
};

console.log(permute([1]))