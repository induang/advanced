const longestCommonSubsequence = function(text1, text2) {
	let n = text1.length; let m = text2.length;
	const dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0));
	for(let i = 1;i <= n; i++){
		for(let j = 1;j <= m;j++){
			if(text1[i-1] === text2[j-1]){
				dp[i][j] = dp[i-1][j-1] + 1;
			}else {
				dp[i][j] = Math.max(dp[i-1][i], dp[i][j-1]);
			}
		}
	}
	return dp[n][m];
};

longestCommonSubsequence('xxxxxx','yyyyyy');