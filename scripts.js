// Time -> O(n^2) | Space -> O(1)
function selectionSort(array) {

  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i];
    let temp = array[i];
    let index = 0;
    
    for (let j = i + 1; j < array.length; j++) {
      if (smallest > array[j]) {
        smallest = array[j];
        index = j;
      }
    }
    if (index !== 0) {
      array[i] = smallest;
      array[index] = temp;
    }
  }
  return array;
}

