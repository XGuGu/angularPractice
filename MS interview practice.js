// I have an array, please rotate this array.

function rotateArr(arr) {
  return arr.slice(1).concat(arr.slice(0, 1));
}

// i have array with n elements can you move all zero to end of the array
// Note:
//
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
function moveZeroes(nums) {
  var idx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
  return nums;
}

// can you find the length of singlelinkedlist with a loop?

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function findLen(head) {
    let fast = head;
    let slow = head;
    let length = 0;

    while (fast && fast.next) {
     fast = fast.next.next;
     slow = slow.next;
     length = length + 1;
     if (fast === slow) return length;
    }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = head.next;

console.log(findLen(head));
