const minPathSum = function(grid) {
	let row = grid.length;
	let column = grid[0].length;
	const rec = new Array(row);
	for(let i = 0;i < row;i++){
		rec[i] = new Array(column);
	}
	
	rec[0][0] = grid[0][0];
	for(let i = 1;i < column; i++){
		rec[0][i] = rec[0][i-1] + grid[0][i];
	}
	for(let i = 1;i < row;i++){
		rec[i][0] = rec[i-1][0] + grid[i][0];
	}

	for(let i = 1;i < row; i++){
			for(let j = 1;j < column; j++){
					rec[i][j] = Math.min(rec[i-1][j] + grid[i][j], rec[i][j-1] + grid[i][j]);
					console.log(rec[i][j]);
			}
	}
	return rec[row-1][column-1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));