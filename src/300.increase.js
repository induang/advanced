const lengthOfLIS = function(nums) {
	let ans = [];
	let tail = 0;
	for(let i = 1;i < nums.length;i++){
			let start = 0, end = tail;
			while(start < end){
					let mid = Math.floor( (start + end) / 2);
					if(ans[mid] < nums[i]) start = mid + 1;
					else end = mid;
			}
			ans[start] = nums[i];
			if(tail === end) tail++;
	}
	return ans.length;
};

const nums = [0,1,0,3,2,3];

console.log(lengthOfLIS(nums))