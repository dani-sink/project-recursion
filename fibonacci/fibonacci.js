export function fibs(n) {
  let fib_n_minus_2 = 0;
  let fib_n_minus_1 = 1;

  if (n < 0) return null;
  if (n === 0) return fib_n_minus_2;
  if (n === 1) return fib_n_minus_1;

  let d = 2;
  let cur_fib;

  while (d <= n) {
    cur_fib = fib_n_minus_2 + fib_n_minus_1;
    fib_n_minus_2 = fib_n_minus_1;
    fib_n_minus_1 = cur_fib;
    d++;
  }

  return cur_fib;
}

export function fibsRec(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibsRec(n - 2) + fibsRec(n - 1);
}

fibsRec(8);
