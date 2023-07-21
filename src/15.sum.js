const threeSum = function(nums) {
	const ans = [];
	nums.sort((a,b) => a-b);
	for(let i = 0;i < nums.length-2&&nums[i] <= 0;i++){
		if(i > 0 && nums[i] === nums[i-1]) continue;
		else {
			let target = -nums[i];
			let left = i+1; let right = nums.length-1;
			while(left < right){
				if(nums[left] + nums[right] === target){
					ans.push([nums[i], nums[left], nums[right]])
					left++;
					while(nums[left] === nums[left-1]) left++;
				}
				if(nums[left] + nums[right] > target) right--;
				if(nums[left] + nums[right] < target) left++;
			}
		}
	}
	return ans;
};

const nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];

console.log(threeSum(nums));