function convertToRomanNumerals(arabicNumber: number) {
  let remainValue = arabicNumber;
  let resultRomanNumber = "";

  const romanNumberOne: string = "I";
  const romanNumberFive: string = "V";
  const romanNumberTen: string = "X";

  while (remainValue >= 10) {
    resultRomanNumber += romanNumberTen;
    remainValue -= 10;
  }

  if (remainValue === 9) {
    resultRomanNumber += "IX";
    remainValue -= 9;
  }

  if (remainValue >= 5) {
    resultRomanNumber += romanNumberFive;
    remainValue -= 5;
  }

  if (remainValue === 4) {
    resultRomanNumber += "IV";
    remainValue -= 4;
  }

  while (remainValue > 0) {
    const repeatedOneRomanNumbers = romanNumberOne.repeat(remainValue);
    resultRomanNumber += repeatedOneRomanNumbers;
    remainValue -= remainValue;
  }

  return resultRomanNumber;
}

export default convertToRomanNumerals;
