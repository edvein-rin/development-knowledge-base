**Big O** is a way to describe **how fast (or slow)** a program or algorithm runs **as the size of the input grows**.

It doesn’t give exact times—just a general idea of **how the performance changes** when the input gets bigger.

![[53u6sz1u.png]]
## Common functions

From best to worst.

| Big O                | Name              | Example                                | Description                                                      |
| -------------------- | ----------------- | -------------------------------------- | ---------------------------------------------------------------- |
| **$O(1)$**           | Constant Time     | Accessing an array element             | Same speed no matter the size of input                           |
| **$O(log n)$**       | Logarithmic Time  | Binary search                          | Input size grows fast, but time grows slowly                     |
| **$O(n)$**           | Linear Time       | Loop through a list                    | Time increases directly with input size                          |
| **$O(n \  log(n))$** | Linearithmic Time | Merge sort, Quick sort (average case)  | Slightly slower than linear, faster than quadratic               |
| **$O(n^2)$**         | Quadratic Time    | Nested loops (e.g., bubble sort)       | Time grows quickly with larger input                             |
| **$O(n^3)$**         | Cubic Time        | Triple nested loops                    | Very slow for large inputs                                       |
| **$O(2^n)$**         | Exponential Time  | Solving the traveling salesman problem | Time doubles with every extra input – impractical for large data |
| **$O(n!)$**          | Factorial Time    | Brute-force permutations               | Time explodes with input size – unusable past small inputs       |
