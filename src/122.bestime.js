const maxProfit = function(prices) {
	let min  = Infinity;
	let ans = 0;
	for(let i = 0;i < prices.length - 1;i++){
		min = min < prices[i]?min:prices[i];
		if(prices[i] > prices[i+1]){
			ans += prices[i] - min;
			min = Infinity;
		} 
	}
	if(prices[prices.length-1] > prices[prices.length-2]){
		ans += prices[prices.length-1] - min;
	}
	return ans;
};

const prices = [7,1,5,3,6,4];
const prices2 = [1,2,3,4,5];
const prices3 = [7,6,4,3,1];

console.log(maxProfit(prices2))