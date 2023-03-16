// 1 ФУНКЦИЯ проверяет длину строки и сверяет с числовым аргументом

function checkLength(string, number) {
    if (number == string.length) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// 2 ФУНКЦИЯ проверяет, является ли строка палиндромом

function checkPalindrome(string) {
    let withoutSpace = string.replaceAll(' ', '');
    let modifiedString = withoutSpace.toLowerCase();
    let newString = '';
    let i = modifiedString.length - 1;

    for (i; i >= 0; i--) {
        newString = newString + modifiedString[i];
    }

    if (newString == modifiedString) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// 3 функция, которая принимает строку, извлекает цифры и возвращает их в виде целого положительного числа

function onlyNumbers(string) {
    let withoutSpace = string.replaceAll(' ', '');
    let outputNumber = '';

    for (let i = 0; i < withoutSpace.length; i++) {
        let numberPosition = withoutSpace[i];

        if (Number(numberPosition)) {
            outputNumber = outputNumber + numberPosition
        } else {
            numberPosition = '';
        }
    }
    console.log(outputNumber)
}

// 4 функция Функция, возвращает исходную строку, дополненную указанными символами до заданной длины.
function modifiedString(string, length, additionalCharacters) {
    let outputString = string;
    if (outputString.length > length) {
        console.log(outputString);
        return outputString;
    } else {
        while (outputString.length != length) {
            if (outputString.length < length && additionalCharacters.length <= length - outputString.length) {
                outputString = additionalCharacters + outputString;
            } else {
                additionalCharacters = additionalCharacters.slice(0, -1)
            }
        }
    }
    console.log(outputString)
}

modifiedString('q', 5, 'wew')
