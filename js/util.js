// 1 ФУНКЦИЯ проверяет длину строки и сверяет с числовым аргументом

function checkLength(string, number) {
  if (number === string.length) {
    return true;
  } else {
    return false;
  }
}
checkLength('ew', 4);

// 2 ФУНКЦИЯ проверяет, является ли строка палиндромом

function checkPalindrome(string) {
  const withoutSpace = string.replaceAll(' ', '');
  const modifiedStringQ = withoutSpace.toLowerCase();
  let newString = '';
  let i = modifiedStringQ.length - 1;

  for (i; i >= 0; i--) {
    newString = newString + modifiedStringQ[i];
  }

  if (newString === modifiedStringQ) {
    return true;
  } else {
    return false;
  }
}
checkPalindrome('rtyu');

// 3 функция, которая принимает строку, извлекает цифры и возвращает их в виде целого положительного числа

function onlyNumbers(string) {
  const withoutSpace = string.replaceAll(' ', '');
  let outputNumber = '';

  for (let i = 0; i < withoutSpace.length; i++) {
    let numberPosition = withoutSpace[i];
    if (Number(numberPosition)) {
      outputNumber = outputNumber + numberPosition;
    } else {
      numberPosition = '';
    }
  }
  return outputNumber;
}
onlyNumbers('rty');


// 4 функция Функция, возвращает исходную строку, дополненную указанными символами до заданной длины..
function modifiedString(string, length, additionalCharacters) {
  let outputString = string;
  if (outputString.length > length) {
    return outputString;
  } else {
    while (outputString.length !== length) {
      if (outputString.length < length && additionalCharacters.length <= length - outputString.length) {
        outputString = additionalCharacters + outputString;
      } else {
        additionalCharacters = additionalCharacters.slice(0, -1);
      }
    }
  }
  return outputString;
}
modifiedString('tre', 4, 're');

export {checkLength};
