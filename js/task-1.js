function makeTransaction(qantity, pricePerDroid) {
  return `You ordered ${qantity} droids worth ${
    qantity * pricePerDroid
  } credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
