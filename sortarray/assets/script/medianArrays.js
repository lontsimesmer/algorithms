function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0,
    high = m;

  while (low <= high) {
    const partition1 = Math.floor((low + high) / 2);
    const partition2 = Math.floor((m + n + 1) / 2) - partition1;

    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === m ? Infinity : nums1[partition1];
    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n ? Infinity : nums2[partition2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // We have partitioned correctly
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      // We are too far on the right side for partition1. Go on the left side.
      high = partition1 - 1;
    } else {
      // We are too far on the left side for partition1. Go on the right side.
      low = partition1 + 1;
    }
  }

  throw new Error("No median found");
}

// Example usage:
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.50000
