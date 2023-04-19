// 前缀和法
const uniquePaths1 = function(m, n) {
	const preSum = new Array(n).fill(1);
	for(let i = 1;i < m;i++){
			for(let j = 1;j < n;j++){
					preSum[j] += preSum[j-1];
			}
	}
	return preSum[n-1];
};


// 纯数学法
const uniquePaths = function(m, n) {
/*
纯数论的方法的思路是这样的：

从左上角到右下角一共有m+n-2步需要走，其中有m-1步是向下走，只要找出m-1步在m+n-2步中的排列就好了

涉猎到计算溢出的处理，不在这里处理了
*/
};

console.log(uniquePaths(3,2));