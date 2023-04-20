const uniquePathsWithObstacles = function(obstacleGrid) {
	let row = obstacleGrid.length;
	let column = obstacleGrid[0].length;
	const rec = new Array(row);
	for(let i = 0; i< row;i++){
		rec[i] = new Array(column).fill(0);
	}

	if(!obstacleGrid[0][0]) rec[0][0] = 1;
	for(let i = 1;i < column;i++){
		if(obstacleGrid[0][i]) continue;
		rec[0][i] += rec[0][i-1]
	}
	for(let i = 1;i < row;i++){
		if(obstacleGrid[i][0]) continue;
		rec[i][0] += rec[i-1][0];
	}
	for(let i = 1;i < row;i++){
		for(let j = 1;j < column;j++){
			if(obstacleGrid[i][j]) continue;
			if(!obstacleGrid[i-1][j]) rec[i][j] += rec[i-1][j];
			if(!obstacleGrid[i][j-1]) rec[i][j] += rec[i][j-1];
			
		}
	}
	return rec[row-1][column-1];
};
const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
const obstacleGrid2 = [[0,0],[0,1]]
const obstacleGrid3 = [[1]]
console.log(uniquePathsWithObstacles(obstacleGrid3))