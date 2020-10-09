const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return;
    }
  }
  return number > 1;
};

export const getColor = (number) => {
  if (isPrime(number)) {
    return "#ff6666";
  } else if (number % 2 === 0) {
    return "#009900";
  } else {
    return "#ffcc00";
  }
};
