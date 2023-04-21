const merge = function(intervals) {
	const ans = [intervals[0]];
	for(let i = 1;i < intervals.length; i++){
		if(ans[ans.length-1][1] >= intervals[i][0]){
			let tmp = ans.pop()
			ans.push([Math.min(tmp[0], intervals[i][0]), Math.max(tmp[1],intervals[i][1])])
		}else{
			ans.push(intervals[i])
		}
	}
	return ans;
};

console.log(merge([[1,4],[0,4]]))