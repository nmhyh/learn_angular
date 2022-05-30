https://usaco.guide/bronze/time-comp?lang=cpp
## Độ phức tạp của thuật toán O(fn)
	- The following code is O(1), because it executes a constant number of operations.
		Ex:
			int a = 5;
			int b = 7;
			int c = 4;
			int d = a + b + c + 153;
	- The time complexity of loops is the number of iterations at the loop runs. For example, the following code examples are both O(n).
		Ex:
			for (int i = 1; i <= n; i++) {
				// constant time code here
			}
		--------------------------------------
			int i = 0;
			while (i < n) {
				// constant time code here
				i++;
			}
	- O(√n) -> O(logn)
	- We can find the time complexity of multiple loops by multiplying together the time complexities of each loop. This example is O(nm), because the outer loop runs O(n) iterations and the inner loop O(m).
		Ex:
			for (int i = 1; i <= n; i++) {
				for (int j = 1; j <= m; j++) {
					// constant time code here
				}
			}




## Thuật Toán Tìm Kiếm Nhị Phân | Hàm Lower_bound và Upper_bound Trong Thư Viện STL

