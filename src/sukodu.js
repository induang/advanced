const isValidSudoku = function(board) {
	// verify rows
	for(let i = 0;i < 9;i ++){
		let record = new Array(9).fill(0);
		for(let j = 0;j < 9;j ++){
			if(board[i][j] === '.') continue;
			if(record[board[i][j]]) return false;
			else record[board[i][j]] = 1;
		}
	}		
	// verify columns
	for(let i = 0;i < 9;i ++){
		let record = new Array(9).fill(0);
		for(let j = 0;j < 9;j ++){
			if(board[j][i] === '.') continue;
			if(record[board[j][i]]) return false;
			else record[board[j][i]] = 1;

		}
	}

	// verify grids
	function verifyGird(x,y){
		let record = new Array(9).fill(0);
		for(let i = x;i < x+3;i ++){
			for(let j = y;j < y+3;j ++){
				if(board[i][j] === '.') continue;
				if(record[board[i][j]]) return false;
				else record[board[i][j]] = 1;
			}
		}
		return true;
	}
	for(let i = 0;i < 9; i+=3){
		for(let j = 0;j < 9;j+=3){
			if(!verifyGird(i,j)) return false;
		}
	}
	
	return true;
};

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board))