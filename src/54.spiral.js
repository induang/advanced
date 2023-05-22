const spiralOrder = function(matrix) {
	const row = matrix.length;
	const cul = matrix[0].length;
	const record = new Array(row);
	for(let i = 0;i < row;i++){
		record[i] = new Array(cul).fill(0);
	}
	const ans = [];
	// 1 right 2 bottom 3 left 4 top
	function dfs(x,y, direction){
		if(ans.length === row*cul) return ;
		record[x][y] = 1;
		ans.push(matrix[x][y]);
			if(direction === 1){
					if(y === cul-1 || record[x][y+1]) dfs(x+1,y,2);
					else dfs(x,y+1,1);
			}else if(direction === 2){
					if(x === row-1 ||　record[x+1][y]) dfs(x,y-1, 3);
					else dfs(x+1,y,2);
			}else if(direction === 3){
					if(y === 0 || record[x][y-1]) dfs(x-1,y,4);
					else dfs(x,y-1,3);
			}else {
					if(x===0 || record[x-1][y]) dfs(x,y+1,1);
					else dfs(x-1,y,4);
			}
	}
	dfs(0,0,1);
	return ans;
};

const m = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

console.log(spiralOrder(m));