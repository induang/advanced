const lengthOfLongestSubstring = function(s) {
	if(!s) return 0;
	const set = new Set();
	const queue = [];
	let ans = -Infinity;
	let cnt = 0;
	for(char of s){
			queue.push(char);
			if(set.has(char)){
				let c = queue.shift();
					while(c != char){
							set.delete(c);
							c = queue.shift(); 
							cnt--;
					}
			}else{
					cnt++;
			}
			set.add(char);
			ans = ans > cnt ? ans : cnt;
	}
	return ans;
};

console.log(lengthOfLongestSubstring("bbbbb"));