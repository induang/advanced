const countAndSay = function(n) {
	function countSay(n){
		if(n===1) return "1";

		const preString = countAndSay(n-1);
		// console.log('-----------', n ,'-----------')
		let ans = "";
		let i = 0;
		let currChat = preString[i];
		let currCount = 1;
		while(i < preString.length-1){
			// console.log(i, " |", currChat, ":  ",currCount)
			if(currChat === preString[i+1]){
				// console.log('reducing...')
				currCount++;
			}else{
				ans = ans + currCount;
				ans = ans + currChat;
				currChat = preString[i+1];
				currCount = 1;
				// console.log('attaching: ', ans)
			}
			i++;
		}
		if(preString[preString.length-1] === preString[preString.length-2]){
			// ans = ans.slice(0,-2);
			ans += currCount;
			ans += preString[preString.length-1];
		}else{
			ans += '1';
			ans += preString[preString.length-1];
		}
		return ans;
	}
	return countSay(n);
};

console.log(countAndSay(6))