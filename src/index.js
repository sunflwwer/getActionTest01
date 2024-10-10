// computes a factorial of a given positive integer
// version: 1->2->3->4
function factorial(n) {
  // 5!=5*4*3*2*1=120
  // if (n < 0) {
  //   throw new Error("n must be a positive integer");
  // }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1); //재귀적 호출
}

module.exports = factorial; // factorial 외부에서 쓸 수 있게
