const jump = function(nums) {
	let ans = 0;
	let maxPosition = 0;
	let end = 0;
	for(let i = 0;i < nums.length-1;i++){
		maxPosition = Math.max(i + nums[i], maxPosition);
		if(i === end){
			end = maxPosition;
			ans++;
		}
	}
	return ans;
};

const nums = [2,3,1,1,4];

console.log(jump(nums))