function convertToRomanNumerals(arabicNumber: number) {
  let remainValue = arabicNumber;
  let resultRomanNumber = "";

  const romanNumerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  while (remainValue > 0) {
    if (remainValue >= 100) {
      resultRomanNumber += romanNumerals[100];
      remainValue -= 100;
      continue;
    }

    if (remainValue >= 90) {
      resultRomanNumber += romanNumerals[90];
      remainValue -= 90;
      continue;
    }

    if (remainValue >= 50) {
      resultRomanNumber += romanNumerals[50];
      remainValue -= 50;
      continue;
    }

    if (remainValue >= 40) {
      resultRomanNumber += romanNumerals[40];
      remainValue -= 40;
      continue;
    }

    if (remainValue >= 10) {
      resultRomanNumber += romanNumerals[10];
      remainValue -= 10;
      continue;
    }

    if (remainValue >= 9) {
      resultRomanNumber += romanNumerals[9];
      remainValue -= 9;
      continue;
    }

    if (remainValue >= 5) {
      resultRomanNumber += romanNumerals[5];
      remainValue -= 5;
      continue;
    }

    if (remainValue >= 4) {
      resultRomanNumber += romanNumerals[4];
      remainValue -= 4;
      continue;
    }

    const repeatedOneRomanNumbers = romanNumerals[1].repeat(remainValue);
    resultRomanNumber += repeatedOneRomanNumbers;
    remainValue -= remainValue;
  }

  return resultRomanNumber;
}

export default convertToRomanNumerals;
