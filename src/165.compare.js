const compareVersion = function(version1, version2) {
	const arr1 = version1.split('.');
	const arr2 = version2.split('.');
	let flag1 = 0;
	let flag2 = 0;
	while(flag1 < arr1.length && flag2 <arr2.length){
			let x = parseInt(arr1[flag1]); let y = parseInt(arr2[flag2]);
			if(x > y) return 1;
			else if (x < y) return -1;
			flag1++; flag2++;
	}
	while(flag1 < arr1.length){
			let x = parseInt(arr1[flag1]); let y = 0;
			if(x > y) return 1;
			flag1++;
	}
	while(flag2 <arr2.length){
			let x = 0; let y = parseInt(arr2[flag2]);
			if (x < y) return -1;
			flag2++;
	}
	return 0;
};

const version1 = "0.1";
const version2 = "1.1";

console.log(compareVersion(version1, version2))