const hights = [
	{level:　4, text: 'level 4'},
	{level:　1, text: 'level 1'},
	{level:　2, text: 'level 2'},
	{level:　3, text: 'level 3'},
	{level:　3, text: 'level 3'},
	{level:　4, text: 'level 4'},
	{level:　4, text: 'level 4'},
	{level:　1, text: 'level 1'},
	{level: 2, text: 'level 2'},
	{level: 3, text: 'level 3'}
]
const result = [];
let index = 0;

function dfs(resultArray, currentIndex){

	resultArray.push({level: hights[index].level, text: hights[index].text, children: []})
	index++;

	if(index >= hights.length) throw new Error('index overflow.');

	if(hights[index].level > hights[index-1].level){
		dfs(resultArray[resultArray.length-1].children, index);
	}else if(hights[index].level === hights[index-1].level){
		dfs(resultArray, index);
	}else{
		return;
	}
	if(hights[index].level >= hights[currentIndex].level){
		dfs(resultArray, index);
	}
}

try{ 
	dfs(result, 0);
} catch(e) {
	console.log(e);
}

console.log(result)