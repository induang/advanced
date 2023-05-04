const generateParenthesis = function(n) {
  const ans = [];
	const arr = new Array(n*2);
	function recursion(str, len, rest){
		if(len === n*2){
			ans.push(str.slice())
			return ;
		}
		for(let i = 0;i < 2;i++){
			if(!i && rest){
				arr.push('(');
				recursion(str + "(", len+1, rest-1);
				arr.pop();
			}else if(i){
				if(arr[arr.length] === '('){
					let tmp = arr.pop();
					recursion(str + ")", len+1,rest);
					arr.push(tmp);
				}
			}
		}
	}
	arr.push('(');
	recursion('(', 1, n-1);
	return ans;
};

console.log(generateParenthesis(3));