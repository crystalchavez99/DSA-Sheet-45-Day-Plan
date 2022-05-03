// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.


var findDuplicate = function(nums) {
    // given an array with range of [1,n] inclusive each with n + 1 ints, sort array
    nums.sort((a,b)=> {
        return a -b
    });
    // once sorted can iterate through to allow search easier when comparing current value to upcoming value
    for(let x = 0; x <= nums.length; x++){
        //console.log(nums[x])
        //console.log(nums[x + 1])
        // if current and next value are the same, it is repeated
        // other continue through the loop
        if(nums[x] == nums[x+1]){
            return nums[x]
        }
    }
};

console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))
