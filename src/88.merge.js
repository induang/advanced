const merge = function(nums1, m, nums2, n) {
    for(let tail = nums2.length-1; tail >= 0; tail--){
        let flag = m-1;
        while(nums1[flag] > nums2[tail]) flag --;
        for(let i = m; i > flag+1; i--){
            nums1[i] = nums1[i-1];
        }
        nums1[flag+1] = nums2[tail];
        m++;
        console.log('process... ', nums1);
    }
    return nums1;
};

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6]

console.log(merge(nums1, 3, nums2, 3));