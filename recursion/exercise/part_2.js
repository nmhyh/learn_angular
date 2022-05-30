// 1. Kiểm tra xem số nguyên dương n có chứa toàn chữ số lẻ, nếu đúng in ra 1, ngược lại in ra 0.
// Ví dụ // Input: 1357 // Ouput: 1
function checkNumberDoNotIntegerN(n) {
  if (n % 2 === 0) return 0;
  if (n < 10 && n % 2 === 1) return 1;
  return checkNumberDoNotIntegerN(parseInt(n / 10));
}
// console.log('n = 1357: checkNumberDoNotIntegerN -> ', checkNumberDoNotIntegerN(1357));

// 2. Kiểm tra xem số nguyên dương n có chứa toàn chữ số chẵn, nếu đúng in ra 1, ngược lại in ra 0.
// Ví dụ // Input: 24 // Output: 1
function checkNumberIntegerN(n) {
  if (n % 2 === 1) return 0;
  if (n < 10 && n % 2 === 0) return 1;
  return checkNumberIntegerN(parseInt(n / 10));
}
// console.log('n = 24: checkNumberIntegerN -> ', checkNumberIntegerN(24));

// 3. Viết hàm tính tổng các chữ số chẵn của số nguyên không âm n.
// Ví dụ // Input: 13576 // Output: 6
function sumNumberIntegerN(n) {
  if (n < 10 && n % 2 === 1) return 0;
  if (n < 10 && n % 2 === 0) return n;
  if (n % 2 === 1) return sumNumberIntegerN(parseInt(n / 10));
  return (n % 10) + sumNumberIntegerN(parseInt(n / 10));
}
// console.log('n = 13576: sumNumberIntegerN -> ', sumNumberIntegerN(13576));

// 4. Viết hàm tính tổng các chữ số lẻ của số nguyên không âm n.
// Ví dụ // Input: 1235 // Output: 9
function sumNumberDoNotIntegerN(n) {
  if (n < 10 && n % 2 === 0) return 0;
  if (n < 10 && n % 2 === 1) return n;
  if (n % 2 === 0) return sumNumberDoNotIntegerN(parseInt(n / 10));
  return (n % 10) + sumNumberDoNotIntegerN(parseInt(n / 10));
}
// console.log('n = 1235: sumNumberDoNotIntegerN -> ', sumNumberDoNotIntegerN(1235));

// 5. Viết hàm tính tích các chữ số của số nguyên không âm n.
// Ví dụ // Input: 1234 // Output: 24
function calculateNumberN(n) {
  if (n === 0) return 0;
  if (n < 10) return n;
  return (n % 10) * calculateNumberN(parseInt(n / 10));
}
// console.log('n = 1234: calculateNumberN -> ', calculateNumberN(1234));

// 6. Viết hàm đếm số lượng chữ số chẵn trong mảng.
// Ví dụ // Input: 6 | 1 2 3 4 5 6 // Output: 3
function countNumberIntegerInArr(a, count) {
  if (a.length === 0) return count;
  if (a[a.length - 1] % 2 === 0) count++;
  a.splice(-1);
  return countNumberIntegerInArr(a, count);
}
// console.log('n = [1, 2, 3, 4, 5, 6, 7, 8]: countNumberIntegerInArr -> ', countNumberIntegerInArr([1, 2, 3, 4, 5, 6, 7, 8], 0));

// 7. Viết hàm đếm số lượng chữ số lẻ trong mảng.
// Ví dụ // Input: 10 | 1 1 1 3 3 2 6 8 9 6 // Output: 6
function countNumberDoNotIntegerInArr(a, count) {
  if (a.length === 0) return count;
  if (a[a.length - 1] % 2 === 1) count++;
  a.splice(-1);
  return countNumberDoNotIntegerInArr(a, count);
}
// console.log('n = [1, 1, 1, 3, 3, 2, 6, 8, 9, 6]: countNumberDoNotIntegerInArr -> ', countNumberDoNotIntegerInArr([1, 1, 1, 3, 3, 2, 6, 8, 9, 6], 0));

// 8. Viết hàm tính tổng các số chẵn trong mảng.
// Ví dụ // Input: 6 | 1 2 3 5 5 // Output: 2
function sumNumberIntegerInArr(a) {
  if (a.length === 0) return 0;
  let itemLast = a[a.length - 1];
  a.splice(-1);
  return (itemLast % 2 === 0 ? itemLast : 0) + sumNumberIntegerInArr(a);
}
// console.log('n = [1, 1, 1, 3, 3, 2, 6, 8, 9, 6]: sumNumberIntegerInArr -> ', sumNumberIntegerInArr([1, 1, 1, 3, 3, 2, 6, 8, 9, 6]));

// 9. Viết hàm tính tổng các chữ số lẻ trong mảng.
// Ví dụ // Input: 5 | 7 7 8 1 2 // Output: 15
function sumNumberDoNotIntegerInArr(a) {
  if (a.length === 0) return 0;
  let itemLast = a[a.length - 1];
  a.splice(-1);
  return (itemLast % 2 === 1 ? itemLast : 0) + sumNumberDoNotIntegerInArr(a);
}
// console.log('n = [1, 1, 1, 3, 3, 2, 6, 8, 9, 6]: sumNumberDoNotIntegerInArr -> ', sumNumberDoNotIntegerInArr([1, 1, 1, 3, 3, 2, 6, 8, 9, 6]));

// 10. Viết hàm xuất ra mảng một chiều.
// Ví dụ // Input: 6 | 1 2 3 4 5 6 // Output: 1 2 3 4 5 6
function createArrByN(n, a) {
  if (n < 0) return 0;
  a.push(n);
  return n === 1 ? a : createArrByN(n - 1, a);
}
// console.log('n = 6: createArrByN -> ', createArrByN(6, []));

// 11. Viết hàm xuất ra mảng một chiều theo thứ tự đảo ngược.
// Ví dụ // Input: 6 | 1 2 3 4 5 6 // Output: 6 5 4 3 2 1
function createArrByNReverse(n, a) {
  if (n < 0) return 0;
  a.push(n);
  return n === 1 ? a : createArrByNReverse(n - 1, a);
}
// console.log('n = 6: createArrByNReverse -> ', createArrByNReverse(6, []));

// 12. Đếm số lượng chữ số phân biệt trong mảng 1 chiều.
// Ví dụ // Input: 8 | 1 1 2 5 4 3 3 1 // Output: 5
function countNumberOtherInArr(a, left, right) {
  if (left > right) return 0;
  for (let i = left + 1; i <= right; i++) {
    if (a[left] === a[i]) return countNumberOtherInArr(a, left + 1, right);
  }
  return 1 + countNumberOtherInArr(a, left + 1, right);
}
// console.log('a = [1, 1, 2, 5, 4, 3, 3, 1]: countNumberOtherInArr -> ', countNumberOtherInArr([1, 1, 2, 5, 4, 3, 3, 1], 0, 6));

// 13. Kiểm tra xem mảng có chứa toàn số âm, nếu đúng in ra 1, ngược lại in ra 0.
// Ví dụ // Input: 10 | 1 2 -5 -5 -92 -95 -88 23 -11 -74 // Output: 0
function checkArrHasNumberNegative(a) {
  if (a.length - 1 < 0) return 1;
  if (a[a.length - 1] < 0) return 0;
  a.splice(-1);
  return checkArrHasNumberNegative(a);
}
// console.log('a = [1, 1, -2, 5, -4, 3, 3, 1]: checkArrHasNumberNegative -> ', checkArrHasNumberNegative([1, 1, -2, 5, -4, 3, 3, 1]));

// 14. Tìm số lớn nhất trong mảng một chiều.
// Ví dụ // Input: 7 | 9 1 2 3 11 0 -9 // Output: 11
function findNumberMaxnArr(a, n) {
  if (n == 0) return -1;
  if (n == 1) return a[0];
  if (a[n - 1] > findNumberMaxnArr(a, n - 1)) return a[n - 1];
  return findNumberMaxnArr(a, n - 1);
}
// console.log('a = [9, 1, 2, 3, 11, 0, -9]: findNumberMaxnArr -> ', findNumberMaxnArr([9, 1, 2, 3, 11, 0, -9], 7));

// Bài 15. Kiểm tra mảng đối xứng, nếu mảng đối xứng in ra 1, ngược lại in ra 0.
// Ví dụ // Input: 10 | 1 2 3 4 5 5 4 3 2 1 // Output: 1
// Input: 6 | 1 2 3 3 2 2 // Output: 0

// Case 1
// function checkArrSymmetry(a, n) {
// 	let temp = 0
// 	for (let i = (n / 2) - 1; i >= 0; i--) {
// 		let j = n / 2 + temp
// 		if (a[i] !== a[j]) return 0
// 		temp++
// 	}
// 	return 1
// }

// Case 2
function checkArrSymmetry(a, n, i) {
  if (i >= n - 1 - i) return 1;
  if (a[i] !== a[n - 1 - i]) return 0;
  return checkArrSymmetry(a, n, i + 1);
}
// console.log(checkArrSymmetry([1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 10, 0));
