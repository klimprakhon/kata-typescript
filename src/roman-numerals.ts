function convertToRomanNumerals(arabicNumber: number) {
  let remainValue = arabicNumber;
  let resultRomanNumber = "";

  const romanNumberOne: string = "I";
  const romanNumberFive: string = "V";
  const romanNumberTen: string = "X";
  const romanNumberFifty: string = "L";

  while (remainValue > 0) {
    if (remainValue >= 50) {
      resultRomanNumber += romanNumberFifty;
      remainValue -= 50;
      continue;
    }

    if (remainValue === 40) {
      resultRomanNumber += "XL";
      remainValue -= 40;
      continue;
    }

    if (remainValue >= 10) {
      resultRomanNumber += romanNumberTen;
      remainValue -= 10;
      continue;
    }

    if (remainValue === 9) {
      resultRomanNumber += "IX";
      remainValue -= 9;
      continue;
    }

    if (remainValue >= 5) {
      resultRomanNumber += romanNumberFive;
      remainValue -= 5;
      continue;
    }

    if (remainValue === 4) {
      resultRomanNumber += "IV";
      remainValue -= 4;
      continue;
    }

    const repeatedOneRomanNumbers = romanNumberOne.repeat(remainValue);
    resultRomanNumber += repeatedOneRomanNumbers;
    remainValue -= remainValue;
  }

  return resultRomanNumber;
}

export default convertToRomanNumerals;
