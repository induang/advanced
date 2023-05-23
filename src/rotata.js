const rotate = function(matrix) {
	const side = matrix.length;
	const newMatrix = new Array(side);
	for(let i = 0;i < side; i++) newMatrix[i] = new Array(side);
	for(let i = 0;i < side; i++){
			for(let j = 0;j < side;j++){
					newMatrix[j][side-i-1] = matrix[i][j];
			}
	}
	for(let i = 0;i < side;i++){
			for(let j = 0;j < side; j++){
					matrix[i][j] = newMatrix[i][j];
			}
	}
	return matrix;
};
const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
 
console.log(rotate(matrix));