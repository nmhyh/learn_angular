// 1. selectionSort -> Độ phức tạp O(n^2)
function selectionSort(a, n) {
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    let temp = a[i];
    a[i] = a[min];
    a[min] = temp;
  }
}
// let a = [6, 4, 7, 9, 16, 3, 47, 4];
// selectionSort(a, 8);
// console.log("array", a);


// 2. bubleSort -> Độ phức tạp O(n^2)
function bubleSort(a, n) {
  for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (a[j] > a[j + 1]) {
				let temp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = temp;
			}
		}
	}
}
// let a = [6, 4, 7, 9, 16, 3, 47, 4];
// bubleSort(a, 8);
// console.log('array', a);

// 3. insertionSort
function insertionSort(a, n) {
	for(let i = 1; i < n; i++) {
		let x = a[i];
		let pos = i - 1;
		while (pos >= 0 && x < a[pos]) {
			a[pos + 1] = a[pos];
			--pos;
		}
		a[pos + 1] = x;
	}
}
// let a = [6, 4, 7, 9, 16, 3, 47, 4];
// insertionSort(a, 8);
// console.log('array', a);


