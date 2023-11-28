function repeatingFractions(n, d) {
  return String(n / d).replace(/(?<=\..*)(\d)\1+/g, "($1)");
}

console.log(repeatingFractions(1, 1), "1");
console.log(repeatingFractions(1, 2), "0.5");
console.log(repeatingFractions(1, 3), "0.(3)");
console.log(repeatingFractions(2, 888), "0.(0)(2)5(2)5(2)5(2)5(2)5(2)");
console.log(repeatingFractions(1554, 70), "22.2");
