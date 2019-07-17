
// 不用解释了吧
class Solution {
  public void rotateArr(int[] array) {
    int length = array.length
    int newArray[] = new int[length];
    for(int x = 0; x <= length-1; x++){
      newArray[(x+1) % length ] = array[x];
    }
  }
}



// 2个指针，idx 和 i， idx 遇到0 停住， i遇到0就跳过，i每次遇到非0 就和 idx互换2个数字， 直到 i 到数组结尾， 结束循环
class Solution {
    public void moveZeroes(int[] nums) {
      int idx = 0;
      for (int i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
          nums[idx] = nums[i];
          nums[i] = idx == i ? nums[i]:0;
          idx++;
        }
      }
    }

}

//快慢指针，让快慢指针一直走，快的一次走2个step， 慢的一次走一个step，用一个 int 记录慢指针走的step， 2个指针相遇 正好慢指针走了完整的一个length

class Solution {
  public int findLen(head) {

      ListNode fast = head;
      ListNode slow = head;
      int length = 0;

      while(fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        length = length + 1;
        if (fast == slow) {
          return length;
        }
      }
  }
}
