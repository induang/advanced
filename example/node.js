function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const l1 = new ListNode(
	1, new ListNode(
		2, new ListNode(
			3, new ListNode(
				4, new ListNode(
					5, null
				)
			)
		)
	)
)