const countAndSay = function(n) {
	function countSay(n){
		if(n===1) return "1";

		const preString = countAndSay(n-1);
		let ans = "";
		let i = 0;
		let currChat = preString[i];
		let currCount = 1;
		while(i < preString.length-1){
			if(currChat === preString[i+1]){
				currCount++;
			}else{
				ans += currCount;
				ans += currChat;
				currChat = preString[i+1];
			}
			i++;
		}
		if(preString[preString.length-1] !== preString[preString.length-2]){
			ans += '1';
			ans += preString[preString.length -1];
			// ans = ans.slice(0,-2);
			// ans += currCount+1;
			// ans += preString[preString.length-1];
		// }else{
		// 	ans += '1';
		// 	ans += preString[preString.length-1];
		}
		console.log(n, ": ", ans)
		return ans;
	}

	return countSay(n);
};

console.log(countAndSay(4))