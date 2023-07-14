const search = function(nums, target) {
	let l = 0, r = nums.length;
	let n = nums.length;
	let k = 0;
	if(nums.length === 1){
		if(nums[0] === target) return 0;
		else return -1;
}
	for(let i = 0;i < nums.length-1;i++){
			if(nums[i] > nums[i+1]) {
					k = n-i-1;
					break;
			}
	}
	// console.log('k: ', k);
	while(l < r){
			let mid = Math.floor((l + r) / 2);
			let real = (mid + n - k) % n;
			// console.log('mid:', mid, "real:", real);
			if(nums[real] > target) r = mid;
			else if (nums[real] < target) l = mid + 1;
			else return real;
	}
	return -1;
};

const nums = [1,2];

console.log(search(nums, 2));