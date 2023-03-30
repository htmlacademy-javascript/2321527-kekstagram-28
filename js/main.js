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

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTION = [
  'Название 1',
  'Название 2',
  'Название 3',
  'Название 4',
  'Название 5',
  'Название 6',
  'Название 7',
  'Название 8',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NUMBER_OBJECT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateId = createRandomIdFromRangeGenerator(1, NUMBER_OBJECT);
const generatePhotoId = createRandomIdFromRangeGenerator(1, NUMBER_OBJECT);
const commentsId = createRandomIdFromRangeGenerator(1, NUMBER_OBJECT);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComentsObject = () => ({
  id: commentsId(),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)
});

const createObject = () => ({
  id: generateId(),
  url: `photos/${generatePhotoId()}.jpg`,
  likes: getRandomInteger(15, 200),
  description: getRandomArrayElement(DESCRIPTION),
  comments: Array.from({length: getRandomInteger(2,15)}, createComentsObject),
});

const createArray = Array.from({length: NUMBER_OBJECT}, createObject);

console.log(createArray);
