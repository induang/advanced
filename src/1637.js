const maxWidthOfVerticalArea = function(points) {
    let xs = points.map((point) => point[0]).sort(function(a, b){return a-b});
		console.log(xs);
    let max = 0;
    let previous = 0;
    for(x of xs){
       max =  x-previous > max ? x-previous : max;
       previous = x;
    }
    return max;
};

let p = [[58,71],[64,41],[96,14],[26,37],[11,67],[84,2],[72,0],[16,95],[74,100],[60,98],[8,45],[6,59],[69,32],[93,12],[26,56],[9,39],[61,84],[54,93],[43,47],[84,40],[95,82],[17,85],[99,41],[96,24],[83,10],[82,62],[26,81],[74,96],[53,0],[11,72],[51,35],[33,3],[33,52],[58,94],[89,92],[54,85]];

maxWidthOfVerticalArea(p);