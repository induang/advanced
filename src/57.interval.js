const insert = function(intervals, newInterval) {
	if(!intervals.length) return [newInterval];
	const ans = [];
	if(newInterval[1] < intervals[0][0]) {
		return [newInterval, ...intervals];
	}
	if(newInterval[0] > intervals[intervals.length-1][1]){
		return [...intervals, newInterval];
	}
	ans.push(intervals[0]);

	for(let inter of intervals){
		let preEle = inter;
		if(preEle[1] >= newInterval[0] && preEle[0] <= newInterval[1]){
			preEle = [Math.min(preEle[0], newInterval[0]), Math.max(preEle[1], newInterval[1])];
		}
		let tail = ans.length - 1;
		if(preEle[0] > newInterval[1] && newInterval[0] > ans[tail][1]){
			ans.push(newInterval);
		}
		if(preEle[0] > ans[tail][1]){
			ans.push(preEle);
		}else{
			const tailEle = ans.pop();
			ans.push([Math.min(tailEle[0], preEle[0]), Math.max(tailEle[1], preEle[1])]);
		}
	}
	return ans;
};

const intervals = [[1,5]];
const newInterval = [0,0];

console.log(insert(intervals, newInterval));