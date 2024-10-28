# Selection Sort

This selectionSort function implements the selection sort algorithm to sort an array of numbers in ascending order. Selection sort is a simple sorting algorithm that repeatedly finds the smallest element from the unsorted portion of the array and moves it to the beginning.

Function Signature

	function selectionSort(array) {...}
 
Parameters: an array of numbers to be sorted.

Returns: The sorted array in ascending order.

**How It Works**

1. Initialize Variables: For each element in the array (up to the second-to-last element), we assume it is the smallest in the remaining unsorted portion of the array.
2. Inner Loop (Finding Smallest Element): The inner loop iterates over the unsorted portion of the array to locate the smallest element and its index.
3. Swapping Elements: If the smallest element found is different from the initial element in the unsorted portion, we swap these elements to move the smallest element to its correct position.
4. Repeat: This process repeats until all elements are sorted.
   
Example

	console.log(selectionSort([29, 10, 14, 37, 13]));
	// Output: [10, 13, 14, 29, 37]
 
**Complexity Analysis**

1. Time Complexity: O(n^2) — because of the nested loops.
2. Space Complexity: O(1) — it sorts the array in-place without requiring extra memory.
   
**Notes:** Selection sort is generally not the most efficient algorithm for large lists but is easy to understand and implement, making it useful for small datasets or as an educational tool to learn sorting principles.
