/* 
	老是不通过的原因在于混淆了进位的记录；
	isCarried代表了当前的运算是否进位，还决定了当了l1和l2为空之后是否再进入一轮运算；

	而previousCarried代表了上次的运算是否进位，从isCarried中拿来，一旦拿到了是否进位的指示，isCarried需要复原，已经处理过了，要清空，否则循环会重复处理处理过的结果；
*/

function ListNode(val, next){
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

let addTwoNumbers = function(l1, l2) {
	let isCarried = 0;
	let previosCarried = 0;
	let res = new ListNode((l1.val + l2.val) % 10);
	isCarried = Math.floor((l1.val + l2.val) / 10);
	console.log(l1.val, l2.val,isCarried, res.val)
	l1=l1.next;
	l2=l2.next;
	let ans = res;
	while(l1 || l2 || isCarried){
			res.next = new ListNode(0);
			res = res.next;
			previosCarried = isCarried;
			let inte1 = l1 ? l1.val : 0;
			let inte2 = l2 ? l2.val : 0;
			res.val = (inte1 + inte2 + previosCarried) % 10;
			isCarried = 0;
			if(l1 || l2) isCarried = Math.floor((inte1 + inte2 + previosCarried) / 10);
			if(l1) l1 = l1.next;
			if(l2) l2 = l2.next; 
	}
	return ans;
	
};

const l1 = {
	val:9,next:{
		val:9,next:{
			val:9,next:{
				val:9,next:{
					val:9,next:{
						val:9,next:{
							val:9,next: null,
						}
					}
				}
			}
	}
}}

const l2 = {
	val:9,next:{
		val:9,next:{
			val:9,next:{
				val:9,next:null
			}
	}
}}

addTwoNumbers(l1, l2);