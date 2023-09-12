function countPrimerNumbers() {
  let primes = 0;
  let isprime = true;
  for (var counter = 2; counter <= 100; counter = counter + 1) {
    isprime = true;
    var limit = Math.round(Math.sqrt(counter));
    for (var mod = 2; mod <= limit; mod++) {
      if (counter % mod == 0) {
        isprime = false;
        break;
      }
    }

    if (isprime) {
      primes = primes + 1;
    }
  }
  return primes;
}

const per = performance.now();
countPrimerNumbers();

console.log(
  "Execution time of printing countPrimeNumbers was " + per + " milliseconds."
);
