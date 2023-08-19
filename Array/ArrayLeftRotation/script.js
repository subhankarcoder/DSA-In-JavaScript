function shiftArrayLeft(arr, places) {
    const shiftedArray = [];
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      const newIndex = ((i + places)%length);
      shiftedArray[i] = arr[newIndex];
    }

    return shiftedArray;
  }

  let arr = [1, 2, 3, 4, 5];
  let shifted = shiftArrayLeft(arr, 2);

  console.log(arr);
  console.log(shifted);