const numIslands = function(grid) {
	let n = grid.length; let m = grid[0].length;
	const rec = new Array(n);
	for(let i = 0; i < n;i++){
			rec[i] = new Array(m).fill(0);
	}
	let ans = 0;
	function dfs(x,y){
			rec[x][y] = 1;
			if(x-1 >= 0 && rec[x-1][y] === 0 && grid[x-1][y] === '1') dfs(x-1,y);
			if(x+1 < n && rec[x+1][y] === 0 && grid[x+1][y] === '1') dfs(x+1,y);
			if(y-1 >= 0 && rec[x][y-1] === 0 && grid[x][y-1] === '1' ) dfs(x,y-1);
			if(y+1 < m && rec[x][y+1] === 0 && grid[x][y+1] === '1') dfs(x,y+1);
	}
	for(let i = 0;i < n; i++){
			for(let j = 0;j < m; j++){
					if(grid[i][j] === '1' && rec[i][j] === 0){
							dfs(i,j);
							ans++;
					}
			}
	}
	return ans;
};
const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(grid))