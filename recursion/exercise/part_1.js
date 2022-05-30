// 1. Tính tổng sau sử dụng hàm đệ qui
// S = 1 + 2 + 3 + 4 + ... + n
// Ví dụ // Input: 3 // Ouput: 6
function sumFromOneToN(n) {
	if (n === 1) return 1;
	if (n < 0) return 0;
	return n + sumFromOneToN(n - 1);
}
// console.log('n = 3 -> sumFromOneToN ', sumFromOneToN(3));

// 2. Tính tổng sau sử dụng hàm đệ qui.
// S = 1^2 + 2^2 + 3^2 + ... + n^2
// Ví dụ // Input: 2 // Output: 5
function sumFromOneToNExponential(n) {
	if (n === 1) return 1;
	if (n < 0) return 0;
	return n*n + sumFromOneToNExponential(n - 1);
}
// console.log('n = 2 -> sumFromOneToNExponential ', sumFromOneToNExponential(2));

// 3. Tính số fibonaci thứ n sử dụng đệ qui.
// F1 = 1, F2 = 1, Fn = Fn - 1 + Fn - 2
// Ví dụ // Input: 6 // Output: 8
function fibonaciRankN(n) {
	if (n === 1 || n === 2) return 1;
	if (n < 0) return 0;
	return fibonaciRankN(n - 1) + fibonaciRankN(n - 2);
}
// console.log('n = 6 -> fibonaciRankN ', fibonaciRankN(6));

// 4. Đếm số lượng chữ số của số nguyên dương n sử dụng đệ qui.
// Ví dụ // Input: 1234 // Output: 4
function countNumberOfN(n) {
	if (n < 10) return 1;
	if (n < 0) return 0;
	return 1 + countNumberOfN(parseInt(n / 10));
}
// console.log('n = 1234 -> countNumberOfN ', countNumberOfN(1234));

// 5.Tính n! sử dụng đệ qui.
// Ví dụ // Input: 5 // Output: 120
function factorial(n) {
	if (n === 1) return 1;
	if (n === 0) return 0;
	return n * factorial(n - 1);
}
// console.log('n = 5 -> factorial ', factorial(5));

// 6. In số đảo ngược của một số nguyên dương sử dụng đệ qui.
// Ví dụ // Input: 12345 // Output: 54321
function reverseNumber(n) {
	if (n < 10) return n;
	return `${n % 10}${reverseNumber(parseInt(n / 10))}`;
}
// console.log('n = 12345 -> reverseNumber ', reverseNumber(12345));

// 7.Tìm ước chung lớn nhất của 2 số sử dụng đệ qui.
// Ví dụ // Input: 10 20 // Output: 10
function greatestCommonDivisor(a, b) {
	if (a === 0) return b;
	if (b === 0) return a;
	return greatestCommonDivisor(b, a % b);
}
// console.log('a = 10, b = 20: greatestCommonDivisor -> ', greatestCommonDivisor(10, 20));

// 8.Tìm chữ số đầu tiên của n.
// Ví dụ // Input: 12345 // Output: 1
function getTheFirstNumberOfN(n) {
	if (n < 10) return n;
	return getTheFirstNumberOfN(parseInt(n / 10));
}
// console.log('n = 12345: getTheFirstNumberOfN -> ', getTheFirstNumberOfN(12345));

// 9. Tính tổng sau sử dụng hàm đệ qui.
// S = -1 + 2 - 3 + 4 + ... + (-1)^n*n
// Ví dụ // Input: 3 // Output: -2
function sumNine(n) {
	if (n === 1) return -1;
	return Math.pow(-1, n) * n + sumNine(n - 1);
}
// console.log('n = 3: sumNine -> ', sumNine(3));

// 10. Tính tổng sau sử dụng đệ qui.
// S = 1 + 1/2 + 1/3 + ... + 1/n
// Ví dụ // Input: 2 // Output: 1.50
function sumTen(n) {
	if (n === 1) return 1;
	return 1 / n + sumTen(n - 1);
}
// console.log('n = 2: sumTen -> ', sumTen(2));

// 11. Tính tổ hợp chập k của n sử dụng đệ qui.
// Dữ liệu đầu vào 1 dòng gồm 2 số n và k.
// Dữ liệu đầu ra là kết quả của bài toán.
// Ví dụ // Input: 3 2 // Output: 3
function convolutionKOfN(k, n) {
	if (k === 0 || k === n) return 1;
	if (k === 1) return n;
	if (n === 0) return 1;
	return convolutionKOfN(k - 1, n - 1) + convolutionKOfN(k, n - 1);
}
// console.log('k = 3, n = 5 : convolutionKOfN -> ', convolutionKOfN(3, 5));


// function countSC(n) {
// 	if (n < 10) {
// 		if (n % 2 == 0) {
// 			return 1
// 		}
// 		return 0
// 	}
// 	if (n % 2 == 1) return countSC(parseInt(n / 10))
// 	return 1 + countSC(parseInt(n / 10))
// }

// function countSCArr(a, count) {
// 	if (a.length === 0) return 0
// 	if (a[a.length - 1] % 2 == 0 ) count++;
// 	a.splice(-1)
// 	return countSCArr(a, count);
// }