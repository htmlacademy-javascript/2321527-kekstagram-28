// 1 ФУНКЦИЯ проверяет длину строки и сверяет с числовым аргументом

function checkLength(string, number) {
    if (number === string.length) {
        return (true);
    } else {
        return (false);
    }
}
checkLength('3456', 3);
// 2 ФУНКЦИЯ проверяет, является ли строка палиндромом

function checkPalindrome(string) {
    const withoutSpace = string.replaceAll(' ', '');
    const modifiedString = withoutSpace.toLowerCase();
    let newString = '';
    let i = modifiedString.length - 1;

    for (i; i >= 0; i--) {
        newString = newString + modifiedString[i];
    }

    if (newString === modifiedString) {
        return (true);
    } else {
        return (false);
    }
}
checkPalindrome('dfgh56789');
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
    return (outputNumber);
}
onlyNumbers('edrfvtby567');
// 4 функция Функция, возвращает исходную строку, дополненную указанными символами до заданной длины..
function toModifiedString(string, length, additionalCharacters) {
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
    return (outputString);
}

toModifiedString('erty', 4, 'rtyu');
