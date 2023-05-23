const generateMatrix = function(n) {
	const ans = new Array(n);
	const record = new Array(n);
	for(let i = 0;i < n;i++){
		record[i] = new Array(n).fill(0);
		ans[i] = new Array(n).fill(0);
	}
	// 1 right 2 bottom 3 left 4 top
	function dfs(x,y, direction, curr){
			record[x][y] = 1;
			ans[x][y] = curr;
			if(curr === n*n) return;
			if(direction === 1){
					if(y === n-1 || record[x][y+1]) dfs(x+1,y,2,curr+1);
					else dfs(x,y+1,1,curr+1);
			}else if(direction === 2){
					if(x === n-1 ||　record[x+1][y]) dfs(x,y-1, 3,curr+1);
					else dfs(x+1,y,2,curr+1);
			}else if(direction === 3){
					if(y === 0 || record[x][y-1]) dfs(x-1,y,4,curr+1);
					else dfs(x,y-1,3,curr+1);
			}else {
					if(x===0 || record[x-1][y]) dfs(x,y+1,1,curr+1);
					else dfs(x-1,y,4,curr+1);
			}
	}
	dfs(0,0,1,1);
	return ans;
};

console.log(generateMatrix(3));