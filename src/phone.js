const letterCombinations = function(digits) {
	if(!digits) return [];

	const map = new Map();
	map.set('2',['a','b','c']);
	map.set('3',['d','e','f']);
	map.set('4',['g','h','i']);
	map.set('5',['j','k','l']);
	map.set('6',['m','n','o']);
	map.set('7',['p','q','r','s']);
	map.set('8',['t','u','v']);
	map.set('9',['w','x','y','z']);

	const ans = [];
	function recrusion(str, level){
		if(level === digits.length){
			ans.push(str.slice());
			return ;
		}
		for(let i = 0;i < map.get(digits[level]).length;i++){
			str += map.get(digits[level])[i];
			recrusion(str, level+1);
			str = str.slice(0,-1);
		}
	}
		recrusion("", 0)

	return ans;
};

console.log(letterCombinations(""))