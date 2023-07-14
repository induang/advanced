const rob = function(nums) {
	const dp = new Array(nums.length).fill(0);
	let max = -Infinity;
	dp[0] = nums[0];
	dp[1] = nums[1];
	for(let i = 2;i < nums.length;i++){
			dp[i] = Math.max(nums[i], nums[i]+dp[i-2], dp[i-1]);
			max = Math.max(dp[i], max);
	}
	return max;
};

const nums = [1,2,3,1];
console.log("ANS: ", rob(nums));