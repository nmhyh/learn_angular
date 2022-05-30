// O(n)
function linearSearch(a, n, x) {
  for (let i = 0; i < n; i++) {
    if (a[i] === x) return true;
  }
  return false;
}

// O(logn) -> sử dụng đc khi mảng đc sắp xếp theo thứ tự
function binarySearch(a, n, x) {
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let m = parseInt((l + r) / 2);
    if (a[m] == x) return true;
    if (a[m] < x) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return false;
}
function binarySearchRecursion(a, l, r, x) {
  if (l > r) return false;
  let m = (l + r) / 2;
  if (a[m] == x) return true;
  if (a[m] < x) return binarySearchRecursion(a, m + 1, r, x);
  return binarySearchRecursion(a, l, m - 1, x);
}

function fristPos(a, n, x) {
  let res = -1;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let m = parseInt((l + r) / 2);
    if (a[m] == x) {
      res = m;
      r = m - 1;
    } else if (a[m] < x) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return res;
}

function lastPos(a, n, x) {
  let res = -1;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let m = parseInt((l + r) / 2);
    if (a[m] == x) {
      res = m;
      l = m + 1;
    } else if (a[m] < x) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return res;
}

console.log("linearSearch -> ", linearSearch([1, 2, 3, 4, 5, 6, 7], 7, 2));
console.log("binarySearch -> ", binarySearch([1, 2, 3, 4, 5, 6, 7], 7, 2));
console.log(
  "binarySearchRecursion -> ",
  binarySearchRecursion([1, 2, 3, 4, 5, 6, 7], 0, 6, 2)
);

console.log(
  "fristPos -> ",
  fristPos([1, 2, 2, 3, 5, 6, 7], 6, 2)
);

console.log(
  "lastPos -> ",
  lastPos([1, 2, 2, 3, 5, 6, 7], 6, 2)
);
