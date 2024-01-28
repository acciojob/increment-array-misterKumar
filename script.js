let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  let newArr = [];
	for(let i=0;i< arr.length;i++){
		newArr[i] = ++arr[i];
	}
	return newArr;
}

alert(incrementArray(arr));