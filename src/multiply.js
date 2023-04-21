const multiply = function(num1, num2) {
	const bigint1 = BigInt(num1);
	const bigint2 = BigInt(num2);
	return (bigint1*bigint2).toString();
};