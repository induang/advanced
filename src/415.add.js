const addStrings = function(num1, num2) {
	let isCarry = 0;
	let ans = '';
	let len1 = num1.length;
	let len2 = num2.length;
	while(len1 || len2){
			let plus1 = len1?parseInt(num1[len1-1]) : 0;
			let plus2 = len2?parseInt(num2[len2-1]) : 0;
			ans = parseInt((plus1+plus2+isCarry)%10) + ans;
			isCarry = parseInt((plus1+plus2+isCarry)/10);
			len1&&len1--;
			len2&&len2--;
	}
	ans = isCarry?1+ans:ans;
	return ans;
};

const addStrings2 = function(num1, num2) {
	let ans = [];
	let isCarry = 0;
	let len1 = num1.length;
	let len2 = num2.length;
	let plus1,plus2;
	while(len1 && len2){
			plus1 = parseInt(num1[len1-1]);
			plus2 = parseInt(num2[len2-1]);
			ans.unshift(parseInt((plus1+plus2+isCarry)%10));
			isCarry = parseInt((plus1+plus2+isCarry)/10);
			len1--;
			len2--;
	}
	while(len1){
		plus1 = parseInt(num1[len1-1]);
		plus2 = 0;
		ans.unshift(parseInt((plus1+plus2+isCarry)%10));
		isCarry = parseInt((plus1+plus2+isCarry)/10);
		len1--;
	}
	while(len2){
		plus2 = parseInt(num2[len2-1]);
		plus1 = 0;		
		ans.unshift(parseInt((plus1+plus2+isCarry)%10));
		isCarry = parseInt((plus1+plus2+isCarry)/10);
		len2--;
	}
	isCarry && ans.unshift(1);
	return ans.join('');
};

const num1 = '861237543';
const num2 = '3210715561907';
const num11 = '456';
const num22 = '77'
console.log(addStrings2(num11, num22));
